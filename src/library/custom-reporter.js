const pluralize = require('pluralize')
const ms = require('ms')

function printReportHeader(results) {
  const { numFailedTests: failedTests } = results;

  if (failedTests === 0)
    return `Congratulations, you have passed this exercise.`

  return `Sorry, we've got ${failedTests} failing ${pluralize(
    'test',
    failedTests
  )}, check your answers!`
}

/**
 * Print results of every suite
 * @param results
 */
function printSuiteResults(results) {
  const blocks = [];

  for (const suite of results.testResults) {
    blocks.push('')
    blocks.push(`${suite.testResults[0].ancestorTitles[0]}.`);
    blocks.push('')
    blocks.push(...suite.testResults.flatMap(printTestResults));
  }

  return blocks;
}

function printTestResults(result) {
  const formattedStatus =
    result.status === 'failed' ? `❌` : `✔️ `;

  const blocks = `${formattedStatus} ${result.title} ${
    result.duration ? `in ${ms(result.duration)}` : ''
  }`;

  return blocks;
}

class CustomReporter {

  async onRunComplete(_, results) {
    console.log('')
    console.log(printReportHeader(results))
  
    const messages = printSuiteResults(results)
  
    messages.map(item => {
      console.log(item)
    })
  }
}

module.exports = CustomReporter
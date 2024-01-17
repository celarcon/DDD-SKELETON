const backend = {
	require: ['./tests/e2e/step_definitions/*.steps.ts'],
	paths: ['./tests/e2e/**/*.feature'],
	requireModule: ['ts-node/register'],
	publishQuiet: true,
}

module.exports = {
	backend,
}

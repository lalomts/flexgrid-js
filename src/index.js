import grid from './flexgrid'
import parseConfig from './classParsing'

const Grid = config => grid(config).container

const Row = config => parseConfig(config, ['align', 'dist', 'reverse'], {row:true})

const Col = config => parseConfig(config, ['size', 'offset', 'reorder', 'reverse', 'hidden'])


export default {
	grid: Grid, 
	row: Row, 
	col: Col
}


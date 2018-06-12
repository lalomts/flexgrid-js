import jss from 'jss'
import preset from 'jss-preset-default'
import defaultSettings from 'defaultSettings'

jss.setup(preset())

const styles = (settings) => {

	const combinedSettings = Object.assign(defaultSettings, settings)

	const { gutterWidth, outerMargin, xs, sm, md, lg, xl } = combinedSettings 

	const halfGutter = gutterWidth * 0.5

	const gutterCompensation = halfGutter * -1

	const viewport = vp => `@media only screen and (min-width: ${vp}px)`

	return ({

		'container': {
			// backgroundColor: 'red',
			boxSizing: 'border-box',
		  marginLeft: 'auto',
		  marginRight: 'auto',
		  paddingRight: outerMargin,
		  paddingLeft: outerMargin,

		  '& .row': {
		  	// backgroundColor: 'blue',
			  boxSizing: 'border-box',
			  display: 'flex',
			  flex: '0 1 auto',
			  flexDirection: 'row',
			  flexWrap: 'wrap',
			  marginRight: gutterCompensation,
			  marginLeft: gutterCompensation
			},

			'& .row.reverse': {
  			flexDirection: 'row-reverse'
			},

			'& .col.reverse': {
  			flexDirection: 'column-reverse'
			},

			'& .col-xs, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-offset-0, .col-xs-offset-1, .col-xs-offset-2, .col-xs-offset-3, .col-xs-offset-4, .col-xs-offset-5, .col-xs-offset-6, .col-xs-offset-7, .col-xs-offset-8, .col-xs-offset-9, .col-xs-offset-10, .col-xs-offset-11, .col-xs-offset-12, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-offset-0, .col-sm-offset-1, .col-sm-offset-2, .col-sm-offset-3, .col-sm-offset-4, .col-sm-offset-5, .col-sm-offset-6, .col-sm-offset-7, .col-sm-offset-8, .col-sm-offset-9, .col-sm-offset-10, .col-sm-offset-11, .col-sm-offset-12, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-offset-0, .col-md-offset-1, .col-md-offset-2, .col-md-offset-3, .col-md-offset-4, .col-md-offset-5, .col-md-offset-6, .col-md-offset-7, .col-md-offset-8, .col-md-offset-9, .col-md-offset-10, .col-md-offset-11, .col-md-offset-12, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-offset-0, .col-lg-offset-1, .col-lg-offset-2, .col-lg-offset-3, .col-lg-offset-4, .col-lg-offset-5, .col-lg-offset-6, .col-lg-offset-7, .col-lg-offset-8, .col-lg-offset-9, .col-lg-offset-10, .col-lg-offset-11, .col-lg-offset-12, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-offset-0, .col-xl-offset-1, .col-xl-offset-2, .col-xl-offset-3, .col-xl-offset-4, .col-xl-offset-5, .col-xl-offset-6, .col-xl-offset-7, .col-xl-offset-8, .col-xl-offset-9, .col-xl-offset-10, .col-xl-offset-11, .col-xl-offset-12': 
			{
			  boxSizing: 'border-box',
			  flex: '0 0 auto',
			  flexBasis: '100%',
			  paddingRight: halfGutter,
			  paddingLeft: halfGutter,
			  maxWidth: '100%'
			},

			//Columns
			'& .col-xs': {
			  flexGrow: 1,
			  flexBasis: 0,
			  maxWidth: '100%'
			},

			'& .col-xs-1': {
			  flexBasis: '8.33333333%',
			  maxWidth: '8.33333333%'
			},

			'& .col-xs-2': {
			  flexBasis: '16.66666667%',
			  maxWidth: '16.66666667%'
			},

			'& .col-xs-3': {
			  flexBasis: '25%',
			  maxWidth: '25%'
			},

			'& .col-xs-4': {
			  flexBasis: '33.33333333%',
			  maxWidth: '33.33333333%'
			},

			'& .col-xs-5': {
			  flexBasis: '41.66666667%',
			  maxWidth: '41.66666667%'
			},

			'& .col-xs-6': {
			  flexBasis: '50%',
			  maxWidth: '50%'
			},

			'& .col-xs-7': {
			  flexBasis: '58.33333333%',
			  maxWidth: '58.33333333%'
			},

			'& .col-xs-8': {
			  flexBasis: '66.66666667%',
			  maxWidth: '66.66666667%'
			},

			'& .col-xs-9': {
			  flexBasis: '75%',
			  maxWidth: '75%'
			},

			'& .col-xs-10': {
			  flexBasis: '83.33333333%',
			  maxWidth: '83.33333333%'
			},

			'& .col-xs-11': {
			  flexBasis: '91.66666667%',
			  maxWidth: '91.66666667%'
			},

			'& .col-xs-12': {
			  flexBasis: '100%',
			  maxWidth: '100%'
			},

			//Offsets 
			'& .col-xs-offset-0': {
			  marginLeft: '0'
			},

			'& .col-xs-offset-1': {
			  marginLeft: '8.33333333%'
			},

			'& .col-xs-offset-2': {
			  marginLeft: '16.66666667%'
			},

			'& .col-xs-offset-3': {
			  marginLeft: '25%'
			},

			'& .col-xs-offset-4': {
			  marginLeft: '33.33333333%'
			},

			'& .col-xs-offset-5': {
			  marginLeft: '41.66666667%'
			},

			'& .col-xs-offset-6': {
			  marginLeft: '50%'
			},

			'& .col-xs-offset-7': {
			  marginLeft: '58.33333333%'
			},

			'& .col-xs-offset-8': {
			  marginLeft: '66.66666667%'
			},

			'& .col-xs-offset-9': {
			  marginLeft: '75%'
			},

			'& .col-xs-offset-10': {
			  marginLeft: '83.33333333%'
			},

			'& .col-xs-offset-11': {
			  marginLeft: '91.66666667%'
			},

			//Alignment
			'& .start-xs': {
			  justifyContent: 'flex-start',
  			textAlign: 'start'
			},

			'& .center-xs': {
			  justifyContent: 'center',
  			textAlign: 'center'
			},

			'& .end-xs': {
			  justifyContent: 'flex-end',
  			textAlign: 'end'
			},

			'& .top-xs': {
			  alignItems: 'flex-start'
			},

			'& .middle-xs': {
			  alignItems: 'center'
			},

			'& .bottom-xs': {
			  alignItems: 'flex-end'
			},

			//Distribution
			'& .around-xs': {
			  justifyContent: 'space-around'
			},

			'& .between-xs': {
			  justifyContent: 'space-between'
			},

			//Reordering
			'& .first-xs': {
			  order: '-1'
			},

			'& .last-xs': {
			  order: '1'
			},

			'& .initial-order-xs': {
			  order: 'initial'
			}
		},

		// Small Viewport 
		[ viewport(sm) ]: {

			width: `${sm - gutterWidth}`,
    	maxWidth: '100%',

			container: {

				'& .col-sm': {
			  flexGrow: 1,
			  flexBasis: 0,
			  maxWidth: '100%'
				},

				'& .col-sm-1': {
				  flexBasis: '8.33333333%',
				  maxWidth: '8.33333333%'
				},

				'& .col-sm-2': {
				  flexBasis: '16.66666667%',
				  maxWidth: '16.66666667%'
				},

				'& .col-sm-3': {
				  flexBasis: '25%',
				  maxWidth: '25%'
				},

				'& .col-sm-4': {
				  flexBasis: '33.33333333%',
				  maxWidth: '33.33333333%'
				},

				'& .col-sm-5': {
				  flexBasis: '41.66666667%',
				  maxWidth: '41.66666667%'
				},

				'& .col-sm-6': {
				  flexBasis: '50%',
				  maxWidth: '50%'
				},

				'& .col-sm-7': {
				  flexBasis: '58.33333333%',
				  maxWidth: '58.33333333%'
				},

				'& .col-sm-8': {
				  flexBasis: '66.66666667%',
				  maxWidth: '66.66666667%'
				},

				'& .col-sm-9': {
				  flexBasis: '75%',
				  maxWidth: '75%'
				},

				'& .col-sm-10': {
				  flexBasis: '83.33333333%',
				  maxWidth: '83.33333333%'
				},

				'& .col-sm-11': {
				  flexBasis: '91.66666667%',
				  maxWidth: '91.66666667%'
				},

				'& .col-sm-12': {
				  flexBasis: '100%',
				  maxWidth: '100%'
				},

				//Offsets 
				'& .col-sm-offset-0': {
				  marginLeft: '0'
				},

				'& .col-sm-offset-1': {
				  marginLeft: '8.33333333%'
				},

				'& .col-sm-offset-2': {
				  marginLeft: '16.66666667%'
				},

				'& .col-sm-offset-3': {
				  marginLeft: '25%'
				},

				'& .col-sm-offset-4': {
				  marginLeft: '33.33333333%'
				},

				'& .col-sm-offset-5': {
				  marginLeft: '41.66666667%'
				},

				'& .col-sm-offset-6': {
				  marginLeft: '50%'
				},

				'& .col-sm-offset-7': {
				  marginLeft: '58.33333333%'
				},

				'& .col-sm-offset-8': {
				  marginLeft: '66.66666667%'
				},

				'& .col-sm-offset-9': {
				  marginLeft: '75%'
				},

				'& .col-sm-offset-10': {
				  marginLeft: '83.33333333%'
				},

				'& .col-sm-offset-11': {
				  marginLeft: '91.66666667%'
				},

				//Alignment
				'& .start-sm': {
				  justifyContent: 'flex-start',
	  			textAlign: 'start'
				},

				'& .center-sm': {
				  justifyContent: 'center',
	  			textAlign: 'center'
				},

				'& .end-sm': {
				  justifyContent: 'flex-end',
	  			textAlign: 'end'
				},

				'& .top-sm': {
				  alignItems: 'flex-start'
				},

				'& .middle-sm': {
				  alignItems: 'center'
				},

				'& .bottom-sm': {
				  alignItems: 'flex-end'
				},

				//Distribution
				'& .around-sm': {
				  justifyContent: 'space-around'
				},

				'& .between-sm': {
				  justifyContent: 'space-between'
				},

				//Reordering
				'& .first-sm': {
				  order: '-1'
				},

				'& .last-sm': {
				  order: '1'
				},

				'& .initial-order-sm': {
				  order: 'initial'
				}
			}
		},

		// Medium Viewport
		[ viewport(md) ]: {

			container: {

				width: `${md - gutterWidth}`,
    		maxWidth: '100%',

				'& .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-offset-0, .col-md-offset-1, .col-md-offset-2, .col-md-offset-3, .col-md-offset-4, .col-md-offset-5, .col-md-offset-6, .col-md-offset-7, .col-md-offset-8, .col-md-offset-9, .col-md-offset-10, .col-md-offset-11, .col-md-offset-12': 
				{
					boxSizing: 'border-box',
				  flex: '0 0 auto',
				  flexBasis: '100%',
				  paddingRight: halfGutter,
				  paddingLeft: halfGutter,
				  maxWidth: '100%'
				},

				'& .col-md': {
				  flexGrow: 1,
				  flexBasis: 0,
				  maxWidth: '100%'
				},

				'& .col-md-1': {
				  flexBasis: '8.33333333%',
				  maxWidth: '8.33333333%'
				},

				'& .col-md-2': {
				  flexBasis: '16.66666667%',
				  maxWidth: '16.66666667%'
				},

				'& .col-md-3': {
				  flexBasis: '25%',
				  maxWidth: '25%'
				},

				'& .col-md-4': {
				  flexBasis: '33.33333333%',
				  maxWidth: '33.33333333%'
				},

				'& .col-md-5': {
				  flexBasis: '41.66666667%',
				  maxWidth: '41.66666667%'
				},

				'& .col-md-6': {
				  flexBasis: '50%',
				  maxWidth: '50%'
				},

				'& .col-md-7': {
				  flexBasis: '58.33333333%',
				  maxWidth: '58.33333333%'
				},

				'& .col-md-8': {
				  flexBasis: '66.66666667%',
				  maxWidth: '66.66666667%'
				},

				'& .col-md-9': {
				  flexBasis: '75%',
				  maxWidth: '75%'
				},

				'& .col-md-10': {
				  flexBasis: '83.33333333%',
				  maxWidth: '83.33333333%'
				},

				'& .col-md-11': {
				  flexBasis: '91.66666667%',
				  maxWidth: '91.66666667%'
				},

				'& .col-md-12': {
				  flexBasis: '100%',
				  maxWidth: '100%'
				},

				//Offsets 
				'& .col-md-offset-0': {
				  marginLeft: '0'
				},

				'& .col-md-offset-1': {
				  marginLeft: '8.33333333%'
				},

				'& .col-md-offset-2': {
				  marginLeft: '16.66666667%'
				},

				'& .col-md-offset-3': {
				  marginLeft: '25%'
				},

				'& .col-md-offset-4': {
				  marginLeft: '33.33333333%'
				},

				'& .col-md-offset-5': {
				  marginLeft: '41.66666667%'
				},

				'& .col-md-offset-6': {
				  marginLeft: '50%'
				},

				'& .col-md-offset-7': {
				  marginLeft: '58.33333333%'
				},

				'& .col-md-offset-8': {
				  marginLeft: '66.66666667%'
				},

				'& .col-md-offset-9': {
				  marginLeft: '75%'
				},

				'& .col-md-offset-10': {
				  marginLeft: '83.33333333%'
				},

				'& .col-md-offset-11': {
				  marginLeft: '91.66666667%'
				},

				//Alignment
				'& .start-md': {
				  justifyContent: 'flex-start',
	  			textAlign: 'start'
				},

				'& .center-md': {
				  justifyContent: 'center',
	  			textAlign: 'center'
				},

				'& .end-md': {
				  justifyContent: 'flex-end',
	  			textAlign: 'end'
				},

				'& .top-md': {
				  alignItems: 'flex-start'
				},

				'& .middle-md': {
				  alignItems: 'center'
				},

				'& .bottom-md': {
				  alignItems: 'flex-end'
				},

				//Distribution
				'& .around-md': {
				  justifyContent: 'space-around'
				},

				'& .between-md': {
				  justifyContent: 'space-between'
				},

				//Reordering
				'& .first-md': {
				  order: '-1'
				},

				'& .last-md': {
				  order: '1'
				},

				'& .initial-order-md': {
				  order: 'initial'
				}
			}
		},

		// Large Viewport
		[ viewport(lg) ]: {

			container: {

				width: `${lg - gutterWidth}`,
    		maxWidth: '100%',

				'& .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-offset-0, .col-lg-offset-1, .col-lg-offset-2, .col-lg-offset-3, .col-lg-offset-4, .col-lg-offset-5, .col-lg-offset-6, .col-lg-offset-7, .col-lg-offset-8, .col-lg-offset-9, .col-lg-offset-10, .col-lg-offset-11, .col-lg-offset-12': 
				{
					boxSizing: 'border-box',
				  flex: '0 0 auto',
				  flexBasis: '100%',
				  paddingRight: halfGutter,
				  paddingLeft: halfGutter,
				  maxWidth: '100%'
				},

				'& .col-lg': {
				  flexGrow: 1,
				  flexBasis: 0,
				  maxWidth: '100%'
				},

				'& .col-lg-1': {
				  flexBasis: '8.33333333%',
				  maxWidth: '8.33333333%'
				},

				'& .col-lg-2': {
				  flexBasis: '16.66666667%',
				  maxWidth: '16.66666667%'
				},

				'& .col-lg-3': {
				  flexBasis: '25%',
				  maxWidth: '25%'
				},

				'& .col-lg-4': {
				  flexBasis: '33.33333333%',
				  maxWidth: '33.33333333%'
				},

				'& .col-lg-5': {
				  flexBasis: '41.66666667%',
				  maxWidth: '41.66666667%'
				},

				'& .col-lg-6': {
				  flexBasis: '50%',
				  maxWidth: '50%'
				},

				'& .col-lg-7': {
				  flexBasis: '58.33333333%',
				  maxWidth: '58.33333333%'
				},

				'& .col-lg-8': {
				  flexBasis: '66.66666667%',
				  maxWidth: '66.66666667%'
				},

				'& .col-lg-9': {
				  flexBasis: '75%',
				  maxWidth: '75%'
				},

				'& .col-lg-10': {
				  flexBasis: '83.33333333%',
				  maxWidth: '83.33333333%'
				},

				'& .col-lg-11': {
				  flexBasis: '91.66666667%',
				  maxWidth: '91.66666667%'
				},

				'& .col-lg-12': {
				  flexBasis: '100%',
				  maxWidth: '100%'
				},

				//Offsets 
				'& .col-lg-offset-0': {
				  marginLeft: '0'
				},

				'& .col-lg-offset-1': {
				  marginLeft: '8.33333333%'
				},

				'& .col-lg-offset-2': {
				  marginLeft: '16.66666667%'
				},

				'& .col-lg-offset-3': {
				  marginLeft: '25%'
				},

				'& .col-lg-offset-4': {
				  marginLeft: '33.33333333%'
				},

				'& .col-lg-offset-5': {
				  marginLeft: '41.66666667%'
				},

				'& .col-lg-offset-6': {
				  marginLeft: '50%'
				},

				'& .col-lg-offset-7': {
				  marginLeft: '58.33333333%'
				},

				'& .col-lg-offset-8': {
				  marginLeft: '66.66666667%'
				},

				'& .col-lg-offset-9': {
				  marginLeft: '75%'
				},

				'& .col-lg-offset-10': {
				  marginLeft: '83.33333333%'
				},

				'& .col-lg-offset-11': {
				  marginLeft: '91.66666667%'
				},

				//Alignment
				'& .start-lg': {
				  justifyContent: 'flex-start',
	  			textAlign: 'start'
				},

				'& .center-lg': {
				  justifyContent: 'center',
	  			textAlign: 'center'
				},

				'& .end-lg': {
				  justifyContent: 'flex-end',
	  			textAlign: 'end'
				},

				'& .top-lg': {
				  alignItems: 'flex-start'
				},

				'& .middle-lg': {
				  alignItems: 'center'
				},

				'& .bottom-lg': {
				  alignItems: 'flex-end'
				},

				//Distribution
				'& .around-lg': {
				  justifyContent: 'space-around'
				},

				'& .between-lg': {
				  justifyContent: 'space-between'
				},

				//Reordering
				'& .first-lg': {
				  order: '-1'
				},

				'& .last-lg': {
				  order: '1'
				},

				'& .initial-order-lg': {
				  order: 'initial'
				}
			}
		},

		// XL Viewport 
		[ viewport(xl) ]: {

			container: {

				width: `${xl - gutterWidth}`,
    		maxWidth: '100%',

				'& .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-offset-0, .col-xl-offset-1, .col-xl-offset-2, .col-xl-offset-3, .col-xl-offset-4, .col-xl-offset-5, .col-xl-offset-6, .col-xl-offset-7, .col-xl-offset-8, .col-xl-offset-9, .col-xl-offset-10, .col-xl-offset-11, .col-xl-offset-12': 
				{
					boxSizing: 'border-box',
				  flex: '0 0 auto',
				  flexBasis: '100%',
				  paddingRight: halfGutter,
				  paddingLeft: halfGutter,
				  maxWidth: '100%'
				},

				'& .col-xl': {
				  flexGrow: 1,
				  flexBasis: 0,
				  maxWidth: '100%'
				},

				'& .col-xl-1': {
				  flexBasis: '8.33333333%',
				  maxWidth: '8.33333333%'
				},

				'& .col-xl-2': {
				  flexBasis: '16.66666667%',
				  maxWidth: '16.66666667%'
				},

				'& .col-xl-3': {
				  flexBasis: '25%',
				  maxWidth: '25%'
				},

				'& .col-xl-4': {
				  flexBasis: '33.33333333%',
				  maxWidth: '33.33333333%'
				},

				'& .col-xl-5': {
				  flexBasis: '41.66666667%',
				  maxWidth: '41.66666667%'
				},

				'& .col-xl-6': {
				  flexBasis: '50%',
				  maxWidth: '50%'
				},

				'& .col-xl-7': {
				  flexBasis: '58.33333333%',
				  maxWidth: '58.33333333%'
				},

				'& .col-xl-8': {
				  flexBasis: '66.66666667%',
				  maxWidth: '66.66666667%'
				},

				'& .col-xl-9': {
				  flexBasis: '75%',
				  maxWidth: '75%'
				},

				'& .col-xl-10': {
				  flexBasis: '83.33333333%',
				  maxWidth: '83.33333333%'
				},

				'& .col-xl-11': {
				  flexBasis: '91.66666667%',
				  maxWidth: '91.66666667%'
				},

				'& .col-xl-12': {
				  flexBasis: '100%',
				  maxWidth: '100%'
				},

				//Offsets 
				'& .col-xl-offset-0': {
				  marginLeft: '0'
				},

				'& .col-xl-offset-1': {
				  marginLeft: '8.33333333%'
				},

				'& .col-xl-offset-2': {
				  marginLeft: '16.66666667%'
				},

				'& .col-xl-offset-3': {
				  marginLeft: '25%'
				},

				'& .col-xl-offset-4': {
				  marginLeft: '33.33333333%'
				},

				'& .col-xl-offset-5': {
				  marginLeft: '41.66666667%'
				},

				'& .col-xl-offset-6': {
				  marginLeft: '50%'
				},

				'& .col-xl-offset-7': {
				  marginLeft: '58.33333333%'
				},

				'& .col-xl-offset-8': {
				  marginLeft: '66.66666667%'
				},

				'& .col-xl-offset-9': {
				  marginLeft: '75%'
				},

				'& .col-xl-offset-10': {
				  marginLeft: '83.33333333%'
				},

				'& .col-xl-offset-11': {
				  marginLeft: '91.66666667%'
				},

				//Alignment
				'& .start-xl': {
				  justifyContent: 'flex-start',
	  			textAlign: 'start'
				},

				'& .center-xl': {
				  justifyContent: 'center',
	  			textAlign: 'center'
				},

				'& .end-xl': {
				  justifyContent: 'flex-end',
	  			textAlign: 'end'
				},

				'& .top-xl': {
				  alignItems: 'flex-start'
				},

				'& .middle-xl': {
				  alignItems: 'center'
				},

				'& .bottom-xl': {
				  alignItems: 'flex-end'
				},

				//Distribution
				'& .around-xl': {
				  justifyContent: 'space-around'
				},

				'& .between-xl': {
				  justifyContent: 'space-between'
				},

				//Reordering
				'& .first-xl': {
				  order: '-1'
				},

				'& .last-xl': {
				  order: '1'
				},

				'& .initial-order-xl': {
				  order: 'initial'
				}
			}
		},

		// xs Only 
		[`@media only screen and (max-width: ${sm - 1}px)`]: {
			container: {
				'& .hidden-xs': {
					display: 'none'
				}
			}
		},

		// sm Only 
		[`@media only screen and (min-width: ${sm}px) and (max-width: ${md - 1}px)`]: {
			container: {
				'& .hidden-sm': {
					display: 'none'
				}
			}
		},

		// md Only 
		[`@media only screen and (min-width: ${md}px) and (max-width: ${lg - 1}px)`]: {
			container: {
				'& .hidden-md': {
					display: 'none'
				}
			}
		},

		// lg Only 
		[`@media only screen and (min-width: ${lg}px) and (max-width: ${xl - 1}px)`]: {
			container: {
				'& .hidden-lg': {
					display: 'none'
				}
			}
		},

		// xl Only 
		[`@media only screen and (min-width: ${xl}px)`]: {
			container: {
				'& .hidden-lg': {
					display: 'none'
				}
			}
		},

	})
}

const grid = (settings) => jss.createStyleSheet(styles(settings)).attach()

export default grid

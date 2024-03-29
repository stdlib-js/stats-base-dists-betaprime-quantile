/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var betaincinv = require( '@stdlib/math-base-special-betaincinv' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );


// MAIN //

/**
* Evaluates the quantile function for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta` at a probability `p`.
*
* @param {Probability} p - input value
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 2.0, 1.0 );
* // returns ~8.472
*
* @example
* var y = quantile( 0.5, 4.0, 2.0 );
* // returns ~2.187
*
* @example
* var y = quantile( 1.1, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.0, -1.0 );
* // returns NaN
*/
function quantile( p, alpha, beta ) {
	var x;
	if (
		isnan( p ) ||
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	x = betaincinv( p, alpha, beta );
	return x / ( 1.0-x );
}


// EXPORTS //

module.exports = quantile;

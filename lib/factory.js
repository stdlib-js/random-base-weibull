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

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils-define-nonenumerable-read-write-accessor' );
var isObject = require( '@stdlib/assert-is-plain-object' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var constantFunction = require( '@stdlib/utils-constant-function' );
var noop = require( '@stdlib/utils-noop' );
var randu = require( '@stdlib/random-base-mt19937' ).factory;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var typedarray2json = require( '@stdlib/array-to-json' );
var format = require( '@stdlib/string-format' );
var validate = require( './validate.js' );
var weibull0 = require( './weibull.js' );


// MAIN //

/**
* Returns a pseudorandom number generator for generating Weibull distributed random numbers.
*
* @param {PositiveNumber} [k] - shape parameter
* @param {PositiveNumber} [lambda] - scale parameter
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @throws {TypeError} `k` must be a positive number
* @throws {TypeError} `lambda` must be a positive number
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {PRNG} pseudorandom number generator
*
* @example
* var weibull = factory( 2.0, 1.0 );
*
* var v = weibull();
* // returns <number>
*
* @example
* var weibull = factory( 2.0, 2.0, {
*     'seed': 297
* });
* var v = weibull();
* // returns <number>
*/
function factory() {
	var lambda;
	var opts;
	var rand;
	var prng;
	var err;
	var k;

	if ( arguments.length === 0 ) {
		rand = randu();
	} else if ( arguments.length === 1 ) {
		opts = arguments[ 0 ];
		if ( !isObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'prng' ) ) {
			if ( !isFunction( opts.prng ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', opts.prng ) );
			}
			rand = opts.prng;
		} else {
			rand = randu( opts );
		}
	} else {
		k = arguments[ 0 ];
		lambda = arguments[ 1 ];
		err = validate( lambda, k );
		if ( err ) {
			throw err;
		}
		if ( arguments.length > 2 ) {
			opts = arguments[ 2 ];
			if ( !isObject( opts ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
			}
			if ( hasOwnProp( opts, 'prng' ) ) {
				if ( !isFunction( opts.prng ) ) {
					throw new TypeError( format( 'invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.', 'prng', opts.prng ) );
				}
				rand = opts.prng;
			} else {
				rand = randu( opts );
			}
		} else {
			rand = randu();
		}
	}
	if ( lambda === void 0 ) {
		prng = weibull2;
	} else {
		prng = weibull1;
	}
	setReadOnly( prng, 'NAME', 'weibull' );

	// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
	if ( opts && opts.prng ) {
		setReadOnly( prng, 'seed', null );
		setReadOnly( prng, 'seedLength', null );
		setReadWriteAccessor( prng, 'state', constantFunction( null ), noop );
		setReadOnly( prng, 'stateLength', null );
		setReadOnly( prng, 'byteLength', null );
		setReadOnly( prng, 'toJSON', constantFunction( null ) );
		setReadOnly( prng, 'PRNG', rand );
	} else {
		setReadOnlyAccessor( prng, 'seed', getSeed );
		setReadOnlyAccessor( prng, 'seedLength', getSeedLength );
		setReadWriteAccessor( prng, 'state', getState, setState );
		setReadOnlyAccessor( prng, 'stateLength', getStateLength );
		setReadOnlyAccessor( prng, 'byteLength', getStateSize );
		setReadOnly( prng, 'toJSON', toJSON );
		setReadOnly( prng, 'PRNG', rand );
		rand = rand.normalized;
	}
	return prng;

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
	*/
	function getSeed() {
		return rand.seed;
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return rand.seedLength;
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return rand.stateLength;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return rand.byteLength;
	}

	/**
	* Returns the current pseudorandom number generator state.
	*
	* @private
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		return rand.state;
	}

	/**
	* Sets the pseudorandom number generator state.
	*
	* @private
	* @param {PRNGStateMT19937} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rand.state = s;
	}

	/**
	* Serializes the pseudorandom number generator as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
	*
	* @private
	* @returns {Object} JSON representation
	*/
	function toJSON() {
		var out = {};
		out.type = 'PRNG';
		out.name = prng.NAME;
		out.state = typedarray2json( rand.state );
		if ( k === void 0 ) {
			out.params = [];
		} else {
			out.params = [ k, lambda ];
		}
		return out;
	}

	/**
	* Returns a pseudorandom number drawn from a Weibull distribution.
	*
	* @private
	* @returns {NonNegativeNumber} pseudorandom number
	*
	* @example
	* var v = weibull1();
	* // returns <number>
	*/
	function weibull1() {
		return weibull0( rand, k, lambda );
	}

	/**
	* Returns a pseudorandom number drawn from a Weibull distribution.
	*
	* @private
	* @param {PositiveNumber} k - scale parameter
	* @param {PositiveNumber} lambda - shape parameter
	* @returns {NonNegativeNumber} pseudorandom number
	*
	* @example
	* var v = weibull2( 2.0, 1.0 );
	* // returns <number>
	*
	* @example
	* var v = weibull2( 3.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var v = weibull2( 0.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var v = weibull2( NaN, NaN );
	* // returns NaN
	*/
	function weibull2( k, lambda ) {
		if (
			isnan( k ) ||
			isnan( lambda ) ||
			k <= 0.0 ||
			lambda <= 0.0
		) {
			return NaN;
		}
		return weibull0( rand, k, lambda );
	}
}


// EXPORTS //

module.exports = factory;

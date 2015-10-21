# music-chord

[![Build Status](https://travis-ci.org/danigb/music-chord.svg?branch=master)](https://travis-ci.org/danigb/music-chord)
[![Code Climate](https://codeclimate.com/github/danigb/music-chord/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-chord)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music-chord.svg)](https://www.npmjs.com/package/music-chord)
[![license](https://img.shields.io/npm/l/music-chord.svg)](https://www.npmjs.com/package/music-chord)
[![pitch-array](https://img.shields.io/badge/pitch--array-compatible-yellow.svg)](https://github.com/danigb/pitch-array)

Music chords made easy:

```js
var chord = require('music-chord')
var M9 = chord('1 3 5 7 9')
M9('D3') // => ['D3', 'F#3', 'A#3', 'C#4', 'E4']
var dom7 = chord('C E G Bb')
dom7('A4') // => ['A4', 'C#5', 'E5', 'G5']
```

## Install

#### Node

Install via npm: `npm i --save music-chord` and require it.

#### Browsers

Currently there's no distribution for browsers, but is planned. You can use browserify, webpack or a similar tool to create one.

## Usage

#### Build chords from intervals

This is the basic usage:

```js
var chord = require('music-chord')
chord('1 3 5 7b 9', 'F2') // => ['F2', 'A2', 'C3', 'Eb3', 'G3']
```

You can partially apply the function:

```js
var dom79 = chord('1 3 5 7b 9')
dom79('F2') // => ['F2', 'A2', 'C3', 'Eb3', 'G3']
```

__Its important to note that all chord notes are ordered by pitch:__

```js
chord('1 3 5 7 2', 'C') // => ['C', 'D', 'E', 'G', 'B']
```

#### Build from notes

You can build from notes the same way (again, ordered notes):

```js
var m7b5 = chord('C Eb Gb Bb')
m7b5('D4') // => ['D4', 'F4', 'Ab4', 'C5']
var maj7drop2 = chord('C2 E2 G1 B2')
maj7drop2('C4') // => [ 'G3', 'C4', 'E4', 'B4' ]
```

#### Get chord intervals

Set `null` as tonic to get the chord intervals:

```js
var chord('C E G B', null) // => ['1P', '3M', '5P', '7M']
```

#### Dictionaries

You can create a dictionary of chords with the `dictionary` function:

```js
var dictionary = require('music-chord/dictionary')
var chords = dictionary({ M: 'C E G', m: 'C Eb G'})
chords('M', 'G') // => ['G', 'B', 'D']
chords('m', 'G') // => ['G', 'Bb', 'D']
```

Use the built-in dictionaries with the `fromName`:

```js
var fromName = require('music-chord/fromName')
fromName('mMaj7', 'F') // => ['F', 'Ab', 'C', 'E']
```

As bonus, with `fromName` function you can place the tonic before the type (with a space if you want to specify the octave):

```js
var fromName = require('music-chord/fromName')
fromName('FmMaj7') // => ['F', 'Ab', 'C', 'E']
fromName('F2 mMaj7') // => ['F2', 'Ab2', 'C3', 'E3']
```

#### Chord detection

Cooming soon...

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="add"><span class="type-signature"></span>add<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Add interval to a gamut</p>
<p>Like all the functions from gamut, this works with pitch-array notation format arrays.
Probably you will want to decorate this function with <code>gamut.notes</code> or
<code>gamut.intervals</code> (see example)</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L151">lineno 151</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.add([1, 0, 0], [ [1, 0, 0], [2, 0, 0]]) // => [ [2, 0, 0], [3, 1, 0] ]
var transpose = gamut.notes(gamut.add)
transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]
var addIntervals = gamut.intevals(gamut.add)
addIntervals('2M', '1P 2M 3M') // => [ '2M', '3M', '4A' ]</code></pre>
</dd>
</dl>
<dl>
<dt>
<h4 class="name" id="asArray"><span class="type-signature"></span>asArray<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get an array from a source. The source can be a string separated by
spaces, commas or bars (<code>|</code>), an array or an object.</p>
<p>This function does not perform any transformation to the items of the array.
This function <strong>always</strong> return an array, even if its empty</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
|
<span class="param-type">Object</span>
</td>
<td class="description last"><p>the source</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L57">lineno 57</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the source converted to an array</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.asArray('c d e') // => [ 'c', 'd', 'e' ]
gamut.asArray('CMaj7 | Dm7 G7') // => [ 'CMaj7', 'Dm7', 'G7' ]
gamut.asArray('1, 2, 3') // => ['1', '2', '3']
gamut.asArray([1, 'a', 3]) // => [1, 'a', 3]
gamut.asArray(object) // => [ object ]
gamut.asArray(null) // => [ ]</code></pre>
</dd>
<dt>
<h4 class="name" id="chord"><span class="type-signature"></span>chord<span class="signature">(source, tonic)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Build a chord from a source and a tonic</p>
<p>A source can be a list of intervals or notes. The tonic must be
a pitch (with or without octave)</p>
<p>This function is currified, so you can partially apply the function passing
one parameter instead of two (see example)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the list of intervals or notes</p></td>
</tr>
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the tonic of the chord or null to get the intervals</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/chord.js">chord.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/chord.js#L25">lineno 25</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the chord notes (or intervals if null tonic)</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var chord = require('music-chord')
chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
var maj79 = chord('C E G B D')
maj79('A4') // => ['A4', 'C#5', 'E5', 'G#5', 'B5']</code></pre>
</dd>
<dt>
<h4 class="name" id="dictionary"><span class="type-signature"></span>dictionary<span class="signature">(chordNames, aliases)</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Create a chord dictionary</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>chordNames</code></td>
<td class="type">
<span class="param-type">Hash</span>
</td>
<td class="description last"><p>a hash that maps names to intervals (or notes)</p></td>
</tr>
<tr>
<td class="name"><code>aliases</code></td>
<td class="type">
<span class="param-type">Hash</span>
</td>
<td class="description last"><p>(Optional) a hash that maps names to names or null</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/dictionary.js">dictionary.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/dictionary.js#L28">lineno 28</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>a function <code>chord(name, tonic)</code></p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var dictionary = require('music-chord/dictionary')
chords = dictionary({M: 'C E G', m: 'C Eb G'})
chords('m', 'F') // => ['F', 'Ab', 'C']
chords('M', 'A4') // => ['A4', 'C#5', 'E5']</code></pre>
</dd>
<dt>
<h4 class="name" id="fromName"><span class="type-signature"></span>fromName<span class="signature">(name, tonic)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Build chords by name</p>
<p>The same as <code>chord</code> function but using chord names instead of intervals.
The chord name may contain the tonic placed before the type (see example)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>name</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the chord name</p></td>
</tr>
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>(Optional) the tonic</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/fromName.js">fromName.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/fromName.js#L22">lineno 22</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array of notes in ascending order or null</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var fromName = require('music-chord/fromName')
fromName('C7b9') // => ['C', 'E', 'G', 'Bb', 'Db']</code></pre>
</dd>
<dt>
<h4 class="name" id="gamut"><span class="type-signature"></span>gamut<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Gamut</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L25">lineno 25</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="intervals"><span class="type-signature"></span>intervals<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get the gamut as intervals or decorate a function to return intervals</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L136">lineno 136</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.intervals('C D E') // => []
var addIntervals = gamut.intervals(gamut.add)
addIntervals('2M', '1P 5P') // => ['2M', '6M']</code></pre>
</dd>
<dt>
<h4 class="name" id="map"><span class="type-signature"></span>map<span class="signature">(fn, source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a gamut mapped to a function</p>
<p>Is important to notice that the function will receive pitches in pitch-array notation format.</p>
<p>This function can be partially applied</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>fn</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>the function to map the gamut with</p></td>
</tr>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L81">lineno 81</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the mapped gamut</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var addOctave = function(p) { return [p[0], p[1], p[2] + 1]}
gamut.map(addOctave, [ [0, 0, 0], [1, 0, 0] ]) // => [ [0, 0, 1], [1, 0, 1]]
var octaveUp = gamut.map(addOctave)
octaveUp([ [0, 0, 0], [1, 0, 0] ]) // => [ [0, 0, 1], [1, 0, 1]]</code></pre>
</dd>
<dt>
<h4 class="name" id="notes"><span class="type-signature"></span>notes<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get notes from a gamut, or decorate a function to return notes</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L122">lineno 122</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.notes('1P 2M 3M') // => ['C0', 'D0', 'E0']
var transpose = gamut.notes(gamut.add)
transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]</code></pre>
</dd>
<dt>
<h4 class="name" id="parse"><span class="type-signature"></span>parse<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert a list of notes or intervals to pitch-array notation format</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L98">lineno 98</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut with notes or intervals in pitch-array notation format</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.parse('C D E') // => [ [0, 0, null], [1, 0, null], [2, 0, null] ]
gamut.parse('1P 3M 5P') // => [ [0, 0, 0], [2, 0, 0], [4, 0, 0] ]</code></pre>
</dd>
<dt>
<h4 class="name" id="pitchClass"><span class="type-signature"></span>pitchClass<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get the pitch classes of a gamut</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L145">lineno 145</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="set"><span class="type-signature"></span>set<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get a set</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L205">lineno 205</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="sort"><span class="type-signature"></span>sort<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Sort a gamut by frequency</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L216">lineno 216</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="uniq"><span class="type-signature"></span>uniq<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Remove duplicates from a gamut</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/tmp/gamut.js#L191">lineno 191</a>
</li>
</ul></dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT License

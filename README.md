# music-chord

[![Build Status](https://travis-ci.org/danigb/music-chord.svg?branch=master)](https://travis-ci.org/danigb/music-chord)
[![Code Climate](https://codeclimate.com/github/danigb/music-chord/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-chord)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/music-chord.svg)](https://badge.fury.io/js/music-chord)

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

#### Dictionaries

You can create a dictionary of chords using hashes:

```js
var dictionary = require('music-chord/dictionary')
var chords = dictionary({ M: 'C E G', m: 'C Eb G'})
chords('M', 'G') // => ['G', 'B', 'D']
chords('m', 'G') // => ['G', 'Bb', 'D']
```

`music-chord` brings some dictionaries you can use:

```js
var dictionary = require('music-chord/dictionary')
var data = require('music-chord/dict/chords.json')
var chords = dictionary(data)
chords('mMaj7', 'F') // => ['F', 'Ab', 'C', 'E']
```

Or require the `fromName` function to have instant access to them:

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
<td class="description last"><p>the tonic of the chord</p></td>
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
<p>the chord notes</p>
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
<pre class="prettyprint"><code>chord('1 3 5 6', 'G') // => ['G', 'B', 'D', 'E']
var maj79 = chord('C E G B D')
maj79('A4') // => ['A4', 'C#5', 'E5', 'G#5', 'B5']</code></pre>
</dd>
<dt>
<h4 class="name" id="chords"><span class="type-signature"></span>chords<span class="signature">(name, tonic)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Create chords by name and tonic</p>
<p>The same as <code>chord</code> function but using chord names instead of intervals</p>
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
<a href="https://github.com/danigb/music-chord/blob/master/chords.js">chords.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-chord/blob/master/chords.js#L20">lineno 20</a>
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
<pre class="prettyprint"><code>chords('C7b9', 'C') // => ''</code></pre>
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
<a href="https://github.com/danigb/music-chord/blob/master/dictionary.js#L13">lineno 13</a>
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

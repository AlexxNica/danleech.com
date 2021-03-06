---
title: "Visited Countries"
date: "2015-02-19T21:40Z"
layout: post
description: "Introducing a project to map countries I have visited"
image: /images/visited-countries-large.png
---

<figure>
    <a href="/projects/visited-countries/" target="_blank">
        <img src="/images/visited-countries-small.png" srcset="/images/visited-countries-medium.png 1x, /images/visited-countries-large.png 2x" alt="World map with countries that I have visited highlighted">
    </a>
    <figcaption>Plenty left still to explore.</figcaption>
</figure>

*Where I’ve Been* maps were a great way of keeping track of visited countries, and when TripAdvisor [sunset the site](http://www.whereivebeen.com) I was disappointed. Rather than relying on yet another third-party service to host my travel history I had a go at making my own map of where I’ve been.

I wanted my map to be fast, statically hosted on this site, and I wanted all graphics to be vector-based. I used the excellent (albeit [Mercator](http://en.wikipedia.org/wiki/Mercator_projection)) <abbr title="Scalable Vector Graphic">SVG</abbr> map of the world from [amCharts](http://www.amcharts.com/svg-maps), which includes country paths with two-letter country code IDs that make styling using <abbr title="Cascading Stylesheet">CSS</abbr> really easy. With the help of CloudFlare’s gzip compression the high-definition map weighs less than 500KB.

Take a look at [my map](/projects/visited-countries/) or grab the [page source](https://raw.githubusercontent.com/danleech/danleech.com/gh-pages/projects/visited-countries/index.html) and make your own.
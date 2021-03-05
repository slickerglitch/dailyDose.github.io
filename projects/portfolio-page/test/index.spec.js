'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Browser = require('zombie');
const browser = new Browser();
const app = express();
const PORT = 7777;
const server = `http://localhost:${PORT}/portfolio.html`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../../')));
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

describe('Portfolio', function(){
  beforeEach(function(done) {
    browser.visit(server, done);
  });

  describe('basic markup', function(){
    const singleTags = [
      'head',
      'title',
      'body',
      'nav',
      'main',
      'header',
    ];

    singleTags.forEach((tag) => {
      it(`should have <${tag}> tag`, function(done) {
        browser.assert.elements(tag, { atLeast: 1 }, `<${tag}> tag does not exist`);
        browser.assert.elements(tag, 1, `More than 1 <${tag}> tag exists`);
        done();
      });
    });

    it('should have <title> tag inside <head> tag', function(done){
      browser.assert.elements('title', { atLeast: 1 }, '<title> tag does not exist');
      browser.assert.elements('title', 1, 'More than 1 <title> tag exists');
      browser.assert.elements('head > title', 1, '<title> tag is not inside <head> tag');
      done();
    });

    it('should have <div> tag with id "all-contents"', function(done){
      browser.assert.elements('div', { atLeast: 1 }, `<div> tag does not exist`);
      browser.assert.elements('div#all-contents', 1, `<div> tag does not have id #all-contents`);
      done();
    });
  });

  describe('nav layout', function() {
    it('should have <nav> tag inside <div> tag with id "all-contents"', function(done){
      browser.assert.elements('nav', { atLeast: 1 }, 'More than 1 <nav> tag exists');
      browser.assert.elements('nav', 1, 'More than 1 <nav> tag exists');
      browser.assert.elements('div#all-contents > nav', 1, '<nav> tag is not inside <div> tag with id "all-contents"');
      done();
    });

    it('should have <header> tag inside <nav> tag', function(done){
      browser.assert.elements('header', { atLeast: 1 }, '<header> tag does not exist');
      browser.assert.elements('header', 1, 'More than 1 <header> tag exists');
      browser.assert.elements('nav > header', 1, '<header> tag is not inside <nav> tag');
      done();
    });

    it('should have <ul> tag inside <nav> tag', function(done){
      browser.assert.elements('ul', { atLeast: 1 }, '<ul> tag does not exists');
      browser.assert.elements('nav > ul', 1, '<ul> tag is not inside <nav> tag');
      done();
    });

    it('should have at least 2 <li> tags inside <ul>', function(done){
      browser.assert.elements('li', { atLeast: 2 }, 'Two <li> tags do not exist');
      browser.assert.elements('ul > li', { atLeast: 2 }, '<li> tags are not inside <ul> tag');
      done();
    });

    it('should have <a> tags inside each <li> tag', function(done){
      browser.assert.elements('a', { atLeast: 2 }, 'Two <a> tags do not exist');
      browser.assert.elements('li > a', { atLeast: 2 }, '<a> tags are not inside <li> tags');
      done();
    });
  });

  describe('main layout', function(){
    it('should have <main> tag inside <div> tag with id "all-contents"', function(done) {
      browser.assert.elements('main', { atLeast: 1 }, '<main> tag does not exist');
      browser.assert.elements('main', 1, 'More than 1 <main> tag exists');
      browser.assert.elements('div#all-contents > main', 1, '<main> tag is not inside <div> tag with id "all-contents"');
      done();
    });

    it('should have <div> tag, with class "content," inside <main> tag', function(done){
      browser.assert.elements('div', { atLeast: 2 }, 'Second <div> tag does not exist');
      browser.assert.elements('main > div', 1, '<div> tag is not inside <main> tag');
      browser.assert.elements('main > div.content', 1, '<div> tag does not have class "content"');
      done();
    });

    it('should have <h1> tag inside <div> tag with class "content"', function(done){
      browser.assert.elements('h1', { atLeast: 1 }, '<h1> tag does not exist');
      browser.assert.elements('div.content > h1', 1, '<h1> tag is not inside <div> tag with class "content');
      done();
    });

    it('should have <ul> tag, with id "portfolio," inside <div> tag with class "content"', function(done){
      browser.assert.elements('ul', { atLeast: 2 }, 'Second <ul> tag does not exist');
      browser.assert.elements('div.content > ul', 1, '<ul> tag is not inside <div> tag with class "content');
      browser.assert.elements('div.content > ul#portfolio', 1, '<ul> tag does not have id "portfolio"');
      done();
    });
  });
});

/*global angular:true */
angular.module("partials/board.html", []).run(["$templateCache", function($templateCache) {
	"use strict";
	$templateCache.put("partials/board.html",
'<ul class="breadcrumb">' +
'  <li><a href="/board/#/board">Boards</a></li>' +
'  <li class="active" ng-bind="boards[board_id].name">Board</li>' +
'</ul>' +
'<div class="container">' +
'<table class="table table-striped">' +
'<tr>' +
'	<th>Post</th>' +
'	<th width="12.5%" style="text-align: center">Replies</th>' +
'	<th width="12.5%" style="text-align: center">Views</th>' +
'	<th width="25%">Last Post</th>' +
'</tr>' +
'<tr ng-repeat="post in posts">' +
'	<td><a href="/board/#/post/{{post.id}}" ng-bind="post.title">Post Title</a><br />by Richard User - 30 min ago</td>' +
'	<td style="text-align: center">1</td>' +
'	<td style="text-align: center">5</td>' +
'	<td><a href="/board/#/post/1">Lost Kitty</a><br />by Joe User - 22 min ago</td>' +
'</tr>' +
'</table>' +
'</div>'
);}]);

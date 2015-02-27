# Gu
移动前端CSS Framework 
> Inspired by Yo


# Quick start
* Clone the repo: git clone git@github.com:guhuina/Gu.git.

#Install prerequisites

# Precompiled Gu
	Gu/
	├── css/
	│   ├── gu.css
	│   ├── gu.css.map
	│   └── gu.min.css
	├── js/
	│   ├── gu.js
	│   └── gu.min.js
	└── fonts/
	    

# Gu source code

	Gu/
	├── lib/
	│   ├── core/
	│   ├── ani/
	│   ├── animate/
	│   ├── element/
	│   ├── fragment/
	│   └── layout/
	├── demo/
	│   ├── animate/
	│   ├── element/
	│   └── fragment/
	├── usage/
	│   └── demo/
	│
	├── js/
	│   
	└── fonts/

# Usage
	
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Gu Template</title>

			<!-- Latest compiled and minified CSS -->
			<link rel="stylesheet" href="css/gu.min.css">

			<!-- Latest compiled and minified JavaScript -->
			<script src="js/gu.min.js"></script>

		</head>
		<body>
			<!-- content -->
		</body>
	</html>


# Advanced Usage
> If you are not satisfied with present style,you can do so. eg:

## step1 open the variables.scss file and edit

	$toolbar:(
		bgcolor: null,
		bordercolor:#ccc,
		color:map-get($base,color),
		font-size:map-get($base,font-size),
		item:(
			padding: .11rem,
			bgcolor: null,
			bordercolor:#ccc,
			active-bgcolor:#ddd
		), 
		decorate:(
			color: #aaa,
			font-size: .18rem
		),
		// 预设主题颜色
		theme:(
			//{bgcolor} {color} {decorate color}
	        disabled : #eee #aaa #dfdfdf,
	        light    : #cb99c5 #fff #fff,
	        normal   : #f0d264 #fff null,
	        info     : #4a87ee #fff #0456e2
		)
	) !default;

## step2 complie and min
	
	$ gulp complie && gulp min

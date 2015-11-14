
window.onload = function() {

	var links = document.getElementById('link').getElementsByTagName('li');
	 
	var main_body = document.getElementById('main_body');

	links[0].getElementsByTagName('a')[0].onclick = function() {	change_background( main_body, 0);	};
	links[1].getElementsByTagName('a')[0].onclick = function() {	change_background( main_body, 1);	};
	links[2].getElementsByTagName('a')[0].onclick = function() {	change_background( main_body, 2);	};
	links[3].getElementsByTagName('a')[0].onclick = function() {	change_background( main_body, 3);	};
	links[4].getElementsByTagName('a')[0].onclick = function() {	change_background(main_body, 4);	};
	links[5].getElementsByTagName('a')[0].onclick = function() {	change_background(main_body, 5);	};
	links[6].getElementsByTagName('a')[0].onclick = function() {	change_background(main_body, 6);	};
	links[7].getElementsByTagName('a')[0].onclick = function() {	change_background(main_body, 7);	};

};

function change_background(object, i) {
	object.style.backgroundImage = "url('images/0"+i+".jpg')" ;
}
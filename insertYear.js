function insertYear()
	{
		var theYear = document.createElement( 'p' );
		theYear.classList.add( 'the-year' );
		theYear.textContent = 'Copyright ' + new Date().getFullYear() + ' MacaDoodle Designs';
		document.getElementById("siteinfo").appendChild(theYear);
	}
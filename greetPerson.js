<!DOCTYPE html>

<html lang="en">
<head>
	<title>Chapter 5, Example 8</title>
</head>
<body>
	<script>
		function Person() {
			var _firstName;
			var _lastName;
			
			return {
				create: function(first, last) {
					this._firstName = first;
					this._lastName = last;
				},
				getFullName: function(){
					return this._firstName + " " + this._lastName
				},
				greet: function(person){
					alert("Hello, " + person.getFullName() + ". I'm " + this.getFullName() + ", son!");
				}
			};
		}

		var janeDoe = Person.create("Barack", "Obama");
		var userFirst = prompt("What is your first name?", "First Name here");
		var userLast = prompt("What is your last name?", "Last Name here");

		function toTitleCase(str){
    		return str.replace(/\w\S*/g, function(txt){
    			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    				}
    			);
			}
		
		var userFirstCapped = toTitleCase(userFirst);
		var userLastCapped = toTitleCase(userLast);

		var userName = Person.create(userFirstCapped, userLastCapped);

		janeDoe.greet(userName);
	</script>
</body>
</html>

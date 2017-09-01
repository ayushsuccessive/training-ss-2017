var formData = [
  {"type":"text","name":"fName","label":"First Name","validate":{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"lName","label":"Last Name","validate":{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"phone","label":"Phone Number","validate":{"length":10,"allow":"number"}},
  {"type":"textarea","name":"about","label":"About","validate":{"minLength":6,"maxLength":150,"allow":"any"}},
  {"type":"text","name":"email","label":"Email","validate":{"allow":"email"}},
  {"type":"password","name":"password","label":"Password","validate":{"minLength":6,"maxLength":10,"allow":"any"}}
]

$.fn.dynamicform = function() {
	for(i in formData) {
		var field = `<div class="form-group">
						<label class="col-sm-2 clabel">${formData[i].label}</label>
						<span class = "message text-danger"></span>
						<input class="form-control "type="${formData[i].type}" name='${formData[i].name}'/>
					</div>`;
		$("#output").append(field);
	}

	this.find('.form-control').focusout(function() {
		$(this).parent().find(".message").text('');
		var flag , msg;
		for(i in formData) {
			flag = 0;
			msg = "*Required ";
			if($(this).parent().find(".clabel").html() == formData[i].label) {
				for (var key in formData[i].validate) {
					var x = "";
		  			if((formData[i].validate).hasOwnProperty(key)) {
		  				var response = validation( key , formData[i].validate[key] , $(this).val() );
		  				if(key != "allow")
		  					x = key + " : " + formData[i].validate[key] + ", ";
		  				else if(formData[i].validate[key] != "any")
		  					x = formData[i].validate[key] + " only ";
						msg += x;
		  				if(response == 0)
		  					flag = 1;
		  			}
				}
			}
			if(flag == 1) {
				$(this).parent().find(".message").text(msg);
			}
		}
	});



	function validation( key, value, field ) {
		if(key == "minLength") {
			return (field.length > value)

		} else if(key == "maxLength") {
			return (field.length < value)

		} else if(key == "allow") {

			if(value == "alphabet") {
				return !(/\d/.test(field));
			} else if(value == "number") {
				console.log(isNaN(parseInt(field)));
				return !(isNaN(field));
			} else if(value == "email") {
				var atposition = field.indexOf("@");  
				var dotposition = field.lastIndexOf(".");  
				return !(atposition < 1 || (dotposition < atposition + 2) || (dotposition + 2 >= field.length));
			} else if(value == "any"){
				return 1;
			}

		} else if(key == "length") {
			return (field.length == value);
		}
	}
}


$(function() {
	$("#output").dynamicform();
});
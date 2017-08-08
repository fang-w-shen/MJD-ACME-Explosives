var category;
var type;
var product;

function printcategories(cate) {
	category = cate;
		
	let select = document.createElement("select")
	select.innerHTML += `<option disabled selected>Choose a Category</option>`;
	cate.forEach((item)=>{
		select.innerHTML+=(`<option>${item.name}</option>`);
			
	})
	document.getElementById("categories").appendChild(select);

	$("select").on("change",(e)=>{
	printtable();
	printtype(e);
		
	})
	
}

function gettype(types) {
	type = types;
}
function getproduct(products) {
	product = products;
	
}

function printtype(e) {
	document.getElementById("types").innerHTML = '';
	let demo=[];
	let fire=[];
		type.types.forEach((item)=>{
			if (item.category <1) {
				fire.push(item)
			}
			else {
				demo.push(item)
			}	
		})
		if (e.target.value === "Fireworks") {
			let select = document.createElement("select");
			select.innerHTML+=`<option disabled selected>Choose a Type</option>`;
			fire.forEach((item)=>{
				select.innerHTML+=(`<option>${item.name}</option>`);
					
			})
			
			document.getElementById("types").appendChild(select);
			$("#fireworks").addClass("selected")
			$("select").on("change",(e)=>{
				$("th").removeClass("selected");
				printproduct(e);
			})	
		}
		else if (e.target.value === "Demolition") {
			let select = document.createElement("select");
			select.innerHTML+=`<option disabled selected>Choose a Type</option>`;
			demo.forEach((item)=>{
				select.innerHTML+=(`<option>${item.name}</option>`);		
			})
			document.getElementById("types").appendChild(select);
			$("#demolition").addClass("selected")
			$("select").on("input",(e)=>{
				$("th").removeClass("selected");
				printproduct(e)
			})			
		}	
}

function printproduct(e) {
	document.getElementById("products").innerHTML = '';
	
	let one = [];
	let two = [];
	let three = [];
	let four = [];
	let five = [];
	let six = [];

	product.products.forEach((item, index)=>{
		let somenumber = Object.values(item)
			
		
		switch (somenumber[0].type)	{
			case 1: one.push(somenumber[0]);
					break;
			case 2: two.push(somenumber[0]);
					break;
			case 3: three.push(somenumber[0]);
					break;
			case 4: four.push(somenumber[0]);
					break;
			case 5: five.push(somenumber[0]);
					break;
			case 6: six.push(somenumber[0]);
					break;
		}
	
	})

	switch (e.target.value) {
		case "FireWork-Personal":
			let select = document.createElement("select")
			select.innerHTML+=`<option disabled selected>Choose a Product</option>`;
			one.forEach((item)=>{
				select.innerHTML+=(`<option>${item.name}</option>`);	
			})

			document.getElementById("products").appendChild(select);
			
			$("#0").addClass("selected");
			$("select").on("input",(e)=>{
				$("td").removeClass("selected")
				switch (e.target.value) {
					case "Sparkler small": 
						$("#t0").addClass("selected");
						break;
					case "Sparkler medium": 
						$("#t1").addClass("selected");
						break;
					case "Sparkler large": 
						$("#t2").addClass("selected");
						break;
				}
					
			})				

			break;
				
		case "FireWork-Recreational":
			let select2 = document.createElement("select")
			select2.innerHTML+=`<option disabled selected>Choose a Product</option>`;
			two.forEach((item)=>{
				select2.innerHTML+=(`<option>${item.name}</option>`);	
			})

			document.getElementById("products").appendChild(select2);

			$("#1").addClass("selected");
			$("select").on("input",(e)=>{
				$("td").removeClass("selected")
				switch (e.target.value) {
					case "Firecrackers small": 
						$("#t3").addClass("selected");
						break;
					case "Firecrackers medium": 
						$("#t4").addClass("selected");
						break;
					case "Firecrackers large": 
						$("#t5").addClass("selected");
						break;
				}
					
			})
			break;
		case "FireWork-Business":
			let select3 = document.createElement("select")
			select3.innerHTML+=`<option disabled selected>Choose a Product</option>`;
			three.forEach((item)=>{
				select3.innerHTML+=(`<option>${item.name}</option>`);	
			})

			document.getElementById("products").appendChild(select3);

			$("#2").addClass("selected");
			$("select").on("input",(e)=>{
				$("td").removeClass("selected")
				switch (e.target.value) {
					case "Comet Chrysanthemum small": 
						$("#t6").addClass("selected");
						break;
					case "Comet Chrysanthemum medium": 
						$("#t7").addClass("selected");
						break;
					case "Comet Chrysanthemum large": 
						$("#t8").addClass("selected");
						break;
				}
					
			})
			break;
		case "Demolition-Personal":
			let select4 = document.createElement("select")
			select4.innerHTML+=`<option disabled selected>Choose a Product</option>`;
			four.forEach((item)=>{
				select4.innerHTML+=(`<option>${item.name}</option>`);	
			})

			document.getElementById("products").appendChild(select4);

			$("#3").addClass("selected");
			$("select").on("input",(e)=>{
				$("td").removeClass("selected")
				switch (e.target.value) {
					case "Armor Piercing small": 
						$("#t9").addClass("selected");
						break;
					case "Armor Piercing medium": 
						$("#t10").addClass("selected");
						break;
					case "Armor Piercing large": 
						$("#t11").addClass("selected");
						break;
				}
					
			})
			break;
		case "Demolition-Recreational":
			let select5 = document.createElement("select")
			select5.innerHTML+=`<option disabled selected>Choose a Product</option>`;
			five.forEach((item)=>{
				select5.innerHTML+=(`<option>${item.name}</option>`);	
			})

			document.getElementById("products").appendChild(select5);

			$("#4").addClass("selected");
			$("select").on("input",(e)=>{
				$("td").removeClass("selected")
				switch (e.target.value) {
					case "Incendiary small": 
						$("#t12").addClass("selected");
						break;
					case "Incendiary medium": 
						$("#t13").addClass("selected");
						break;
					case "Incendiary large": 
						$("#t14").addClass("selected");
						break;
				}
					
			})
			break;
		case "Demolition-Business":
			let select6 = document.createElement("select")
			select6.innerHTML+=`<option disabled selected>Choose a Product</option>`;
			six.forEach((item)=>{
				select6.innerHTML+=(`<option>${item.name}</option>`);	
			})

			document.getElementById("products").appendChild(select6);

			$("#5").addClass("selected");
			$("select").on("input",(e)=>{
				$("td").removeClass("selected")
				switch (e.target.value) {
					case "Dynamite small": 
						$("#t15").addClass("selected");
						break;
					case "Dynamite medium": 
						$("#t16").addClass("selected");
						break;
					case "Dynamite large": 
						$("#t17").addClass("selected");
						break;
				}
					
			})
			break;
	}	
				
}


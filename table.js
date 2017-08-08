function printtable() {
	let $di = $("#table");
	$di.html(`
        <table class="table table-sm table-inverse">
          <thead> 
          <div id="fireworks">Fireworks</div>
            <tr>
              <th></th>
              <th id="0">FireWork-Personal</th>
              <th id="1">FireWork-Recreational</th>
              <th id="2">FireWork-Business</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td id="t0">${Object.entries(product.products[0])[0][1].name}</td>
              <td id="t3">${Object.entries(product.products[3])[0][1].name}</td>
              <td id="t6">${Object.entries(product.products[6])[0][1].name}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td id="t1">${Object.entries(product.products[1])[0][1].name}</td>
              <td id="t4">${Object.entries(product.products[4])[0][1].name}</td>
              <td id="t7">${Object.entries(product.products[7])[0][1].name}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td id="t2">${Object.entries(product.products[2])[0][1].name}</td>
              <td id="t5">${Object.entries(product.products[5])[0][1].name}</td>
              <td id="t8">${Object.entries(product.products[8])[0][1].name}</td>
            </tr>
          </tbody>
        </table>
		`)
	$di.append(`
         <table class="table table-sm table-inverse">
          <thead> 
          <div id="demolition">Demolition</div>
            <tr>
              <th></th>
              <th id="3">Demolition-Personal</th>
              <th id="4">Demolition-Recreational</th>
              <th id="5">Demolition-Business</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td id="t9">${Object.entries(product.products[9])[0][1].name}</td>
              <td id="t12">${Object.entries(product.products[12])[0][1].name}</td>
              <td id="t15">${Object.entries(product.products[15])[0][1].name}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td id="t10">${Object.entries(product.products[10])[0][1].name}</td>
              <td id="t13">${Object.entries(product.products[13])[0][1].name}</td>
              <td id="t16">${Object.entries(product.products[16])[0][1].name}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td id="t11">${Object.entries(product.products[11])[0][1].name}</td>
              <td id="t14">${Object.entries(product.products[14])[0][1].name}</td>
              <td id="t17">${Object.entries(product.products[17])[0][1].name}</td>
            </tr>
          </tbody>
        </table>
		`)


		
}
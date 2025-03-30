document.querySelector('#submitdata').addEventListener('submit', (e) => {

  e.preventDefault()
  const allinput = document.querySelectorAll(".input-data input")
  console.log(allinput[0]);
  console.log(allinput[1]);
  console.log(allinput[2]);
  console.log(allinput[3]);


  const pname = allinput[0].value;
  const pprice = allinput[1].value;
  const pno = allinput[2].value;
  const prating = allinput[3].value;
  // localStorage.setItem("productlist",JSON.stringify(productdetails));

  const arr2 = JSON.parse(localStorage.getItem('productlist')) || [];
  const id = arr2.length + 1;
  const productdetails = {
    id, pname, pprice, pno, prating
  }

  arr2.push(productdetails)
  console.log(arr2);
  console.log("data............");
  console.log(productdetails);
  localStorage.setItem('productlist', JSON.stringify(arr2))
  show()
  window.location.reload()

})

function show() {
  const getdata = JSON.parse(localStorage.getItem('productlist'));
  let result = "";
  getdata.forEach((users, index) => {
    result +=
      `
        <tr>
            <td>${index + 1}</td>
            <td>${users.pname}</td>
            <td>${users.pprice}</td>
            <td>${users.pno}</td>
            <td>${users.prating}</td>
            <td>
                 <button class="btn btn-danger" onclick="trash(${index})">Delete</button>
                <button class="btn btn-danger" onclick="edit(${index})">Edit</button>
            </td>
        </tr>

    `
  });
  document.querySelector('#tabledata').innerHTML = result
}
show()


function trash(index) {
  if (confirm("do you want to delete")) {
    const getdata = JSON.parse(localStorage.getItem('productlist'))
    getdata.splice(index, 1)
    localStorage.setItem('productlist', JSON.stringify(getdata))
    show()
  }
}

function edit(index) {
  document.querySelector("#submit").style.display = "none";
  document.querySelector("#update").style.display = "block";


  const getdata = JSON.parse(localStorage.getItem('productlist'));
  console.log(getdata[index]);

  const singledata = getdata[index];
  const allinput = document.querySelectorAll('.input-data input')
  allinput[0].value = singledata.pname
  allinput[1].value = singledata.pprice
  allinput[2].value = singledata.pno
  allinput[3].value = singledata.prating


  document.querySelector('#update').addEventListener("click", () => {
    const allinput = document.querySelectorAll('.input-data input')
    const pname = allinput[0].value;
    const pprice = allinput[1].value;
    const pno = allinput[2].value;
    const prating = allinput[3].value;


    const newproduct = {
      pname, pprice, pno, prating
    }
    
    getdata.splice(index, 1, newproduct);
    localStorage.setItem('productlist', JSON.stringify(getdata))
    show();
  })
}



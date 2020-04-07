function showConsignmentDetails(order) {
    Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',

        html:
            `<div class="card-body">
       <h5 class="card-title">Controls Types</h5>
       <form novalidate="" class="ng-untouched ng-pristine ng-valid">
           <div class="position-relative form-group">
               <label for="exampleEmail">Email</label>
               <input class="form-control" id="exampleEmail" name="email" placeholder="with a placeholder" type="email">
           </div>
           <div class="position-relative form-group">
               <label for="examplePassword">Password</label>
               <input class="form-control" id="examplePassword" name="password" placeholder="password placeholder" type="password">
           </div>
           <div class="position-relative form-group">
               <label for="exampleSelect">Status</label>
               <select class="form-control" id="exampleSelect" name="select">
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
               </select>
           </div>
           <div class="position-relative form-group">
               <label for="exampleSelectMulti">Select Multiple</label>
               <select class="form-control" id="exampleSelectMulti" multiple="multiple" name="selectMulti">
                   <option>1</option>
                   <option>2</option>
                   <option>3</option>
                   <option>4</option>
                   <option>5</option>
               </select>
           </div>
           <div class="position-relative form-group">
               <label for="exampleText">Text Area</label>
               <textarea class="form-control" id="exampleText" name="text"></textarea>
           </div>
           <div class="position-relative form-group">
               <label for="exampleFile">File</label>
               <input class="form-control-file" id="exampleFile" name="file" type="file"><small class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line. </small></div>
           <button class="mt-1 btn btn-primary">Submit</button>
       </form>
   </div>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Submit',
        confirmButtonAriaLabel: 'Submit',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    })
}
function showCreateConsignmentForm() {
    Swal.fire({
        title: '<strong>New Consignment</strong>',

        html:
            `<div class="main-card mb-3 card">
            <div class="card-body">
                <h5 class="card-title">Form Select</h5>
                <div class="row">
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
        
                    </div>
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="name">Surname</label>
                            <input type="text" name="surname" id="surname" />
                        </div>
                    </div>
                </div>
                <div class="row">
        
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="name">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
        
                    </div>
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="name">Phone number</label>
                            <input type="phone" name="phone" id="phone" />
                        </div>
                    </div>
        
        
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="street">Address</label>
                            <input type="text" name="street" id="street" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="building">Building /Apartment</label>
                            <input type="text" name="building" id="building" />
                        </div>
                    </div>
        
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="suburb">Surburb</label>
                            <input type="text" name="suburb" id="suburb" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="city">City</label>
                            <input type="text" name="city" id="city" />
                        </div>
                    </div>
        
                </div>
                <div class="row">
                <div class="col-md-6">
                <div class="position-relative form-group">
                    <label for="code">Postal / Area code</label>
                    <input type="text" name="code" id="code" />
                </div>
            </div>
                    <div class="col-md-6">
                        <div class="position-relative form-group">
                            <label for="exampleCustomSelectDisabled">Province</label>
                            <select class="custom-select form-control" id="province" name="province" type="select">
                                <option value="">Eastern Cape</option>
                                <option>Gauteng</option>
                                <option>KwaZulu Natal</option>
                                <option>Limpopo</option>
                                <option>Mpumalanga</option>
                                <option>North West</option>
                                <option>Northern Cape</option>
                                <option>Western Cape</option>
                            </select>
                        </div>
        
                    </div>
                   
        
                </div>
            </div>
        </div>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: true,
        confirmButtonText: ' Submit',
        confirmButtonAriaLabel: 'Submit',
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: 'Cancel'
    }).then(result => {
        if (result) {
            saveConsignment();
        }
    })
}

function saveConsignment() {
    alert('saved');
}
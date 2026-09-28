const patientForm = document.getElementById("patientForm");

const appointmentTable = document.getElementById("appointmentTable");

const healthInformation = document.getElementById("healthInformation");


// Generate Appointment ID

function generateAppointmentId() {

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    return "APT-" + randomNumber;

}


// Format date

function formatDate(dateValue) {

    const date = new Date(dateValue);

    return date.toLocaleDateString("en-IN");

}


// Handle Registration

patientForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get form values

    const patientName =
        document.getElementById("patientName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const dob =
        document.getElementById("dob").value;

    const gender =
        document.getElementById("gender").value;

    const bloodGroup =
        document.getElementById("bloodGroup").value;

    const department =
        document.getElementById("department").value;

    const doctor =
        document.getElementById("doctor").value;

    const appointmentDate =
        document.getElementById("appointmentDate").value;

    const appointmentTime =
        document.getElementById("appointmentTime").value;

    const address =
        document.getElementById("address").value.trim();

    const symptoms =
        document.getElementById("symptoms").value.trim();


    // HTML5 validation

    if (!patientForm.checkValidity()) {

        patientForm.classList.add("was-validated");

        alert("Please fill all required fields correctly.");

        return;

    }


    // Create Appointment ID

    const appointmentId = generateAppointmentId();


    // Appointment Status

    const appointmentStatus = "Confirmed";


    // Add appointment to table

    appointmentTable.innerHTML = `

        <tr>

            <td>${appointmentId}</td>

            <td>${patientName}</td>

            <td>${department}</td>

            <td>${doctor}</td>

            <td>${formatDate(appointmentDate)}</td>

            <td>${appointmentTime}</td>

            <td>
                <span class="badge bg-success">
                    ${appointmentStatus}
                </span>
            </td>

        </tr>

    `;


    // Display Health Information

    healthInformation.innerHTML = `

        <div class="col-md-6">

            <div class="info-card">

                <strong>Patient Name:</strong>

                <p class="mb-0">
                    ${patientName}
                </p>

            </div>

        </div>


        <div class="col-md-6">

            <div class="info-card">

                <strong>Blood Group:</strong>

                <p class="mb-0">
                    ${bloodGroup}
                </p>

            </div>

        </div>


        <div class="col-md-6">

            <div class="info-card">

                <strong>Department:</strong>

                <p class="mb-0">
                    ${department}
                </p>

            </div>

        </div>


        <div class="col-md-6">

            <div class="info-card">

                <strong>Doctor:</strong>

                <p class="mb-0">
                    ${doctor}
                </p>

            </div>

        </div>


        <div class="col-md-6">

            <div class="info-card">

                <strong>Appointment Date:</strong>

                <p class="mb-0">
                    ${formatDate(appointmentDate)}
                </p>

            </div>

        </div>


        <div class="col-md-6">

            <div class="info-card">

                <strong>Appointment Time:</strong>

                <p class="mb-0">
                    ${appointmentTime}
                </p>

            </div>

        </div>


        <div class="col-md-6">

            <div class="info-card">

                <strong>Symptoms:</strong>

                <p class="mb-0">
                    ${symptoms}
                </p>

            </div>

        </div>


        <div class="col-md-6">

            <div class="info-card">

                <strong>Appointment Status:</strong>

                <p class="mb-0">

                    <span class="badge bg-success">
                        ${appointmentStatus}
                    </span>

                </p>

            </div>

        </div>

    `;


    // Success message

    alert(
        "Patient registered successfully!\n\nAppointment ID: "
        + appointmentId
    );


    // Scroll to appointment section

    document.getElementById("appointments")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// Reset form

patientForm.addEventListener("reset", function () {

    patientForm.classList.remove("was-validated");

});
import React, { useEffect, useState } from "react";

function Register() {
  const [state, setState] = useState({
    email: "",
    password: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    reciveNewsLetters: "",
  });
  const [countries, setCountries] = useState([
    { id: 1, countryName: "iran" },
    { id: 2, countryName: "india" },
    { id: 3, countryName: "turkey" },
    { id: 4, countryName: "Azerbaijan" },
    { id: 5, countryName: "USA" },
    { id: 6, countryName: "japan" },
    { id: 7, countryName: "UK" },
    { id: 8, countryName: "france" },
    { id: 9, countryName: "Brazil" },
    { id: 10, countryName: "canada" },
  ]);

  const [errors , setErrors] = useState({
    email: [],
    password: [],
    fullName: [],
    dateOfBirth: [],
    gender: [],
    country: [],
    reciveNewsLetters: [],
  })
  const [dirty , setDirty] = useState({
    email: false,
    password: false,
    fullName: false,
    dateOfBirth: false,
    gender: false,
    country: false,
    reciveNewsLetters: false,
  });
  const [message , setMessage] = useState("");

  const validate = () =>{
    let errorsData = {};

    //email
    errorsData.email = [];

    //email can`t blank
    if(!state.email){
      errorsData.email.push("Email can`t be blank")
    }
  }
  useEffect(() => {
    document.title = "register";
  }, []);

  return (
    <div className="row">
      <div className="col-lg-6 col-md-7 mx-auto">
        <div className="card border-primary shaddow my-2">
          <div className="card-header border-bottom border-primary">
            <h4
              className="text-primary text-center"
              style={{ fontSize: "40px" }}
            >
              Register
            </h4>
          </div>
          <div className="card-body border-primary">
            {/* email */}
            <div className="form-group form-row">
              <label htmlFor="email" className="col-lg-4 mb-1">
                Email
              </label>
              <input
                type="text"
                className="form-control mb-1"
                id="email"
                value={state.email}
                name="email"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
            </div>
            {/* password */}
            <div className="form-group form-row">
              <label htmlFor="password" className="col-lg-4 mb-1">
                Password
              </label>
              <input
                type="text"
                className="form-control mb-1"
                id="password"
                value={state.password}
                name="password"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
            </div>
            {/* fullname */}
            <div className="form-group form-row">
              <label htmlFor="fullname" className="col-lg-4 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="form-control mb-1"
                id="fullname"
                value={state.fullName}
                name="fullname"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
            </div>
            {/* birth day */}
            <div className="form-group form-row">
              <label htmlFor="dateOfBirth" className="col-lg-4 mb-1">
                Date Of Birth
              </label>
              <input
                type="date"
                className="form-control mb-1"
                id="dateOfBirth"
                value={state.dateOfBirth}
                name="dateOfBirth"
                onChange={(e) =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
            </div>
            {/* gender */}
            <div className="form-group form-row">
              <label htmlFor="" className="col-lg-4 mb-1">
                Gender
              </label>
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input mb-1"
                    value="male"
                    id="male"
                    name="gender"
                    checked={state.gender === "male" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label htmlFor="male" className="form-checked-inline">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input mb-1"
                    value="female"
                    id="female"
                    name="gender"
                    checked={state.gender === "female" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label htmlFor="female" className="form-checked-inline">
                    Female
                  </label>
                </div>
              </div>
            </div>
            {/* country */}
            <div className="form-group form-row">
              <label htmlFor="country" className="col-lg-4 mb-1">
                Country
              </label>
              <div className="col-lg-12">
                <select
                  className="form-control mb-1"
                  id="country"
                  value={state.country}
                  name="country"
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                >
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.countryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* end of country */}
            {/* recive news letters */}
            <div className="form-group form-row">
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mb-1"
                    value="true"
                    id="reciveNewsLetters"
                    name="reciveNewsLetters"
                    checked={state.reciveNewsLetters === true ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.checked })
                    }
                  />
                  <label
                    htmlFor="reciveNewsLetters"
                    className="form-checked-inline"
                  >
                    recive News Letters
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

import { Form, Field } from "react-final-form";
// import { useSelector, useDispatch } from "react-redux";
// import { addEmployee } from "./action";

// membuat promise dengan nilai balik benar dengan memberikan timeout
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FormComp = ({ onClose }) => {
  //   const dispatch = useDispatch();
  const onSubmit = async (values) => {
    await sleep(300);
    onClose();
    // dispatch(addEmployee(values));
    //   memberikan alert dengan json value yang diberikan spacer bernilai 2
    window.alert(JSON.stringify(values, 0, 2));
  };
  return (
    <Form
      /*   onSubmit merupakan props dari func Form 
        yang berfungsi memberikan aksi setelah inputan disubmit
        */
      onSubmit={onSubmit}
      initialValues={{ employed: false }}
      // bersifat optional untuk meneruskan value comp ke form melewati handleSubmit
      // submitting bernilai true, jika form diproses dengan async
      /* pristine akan true, jika value pada form masih bernilai sesuai dengan initialValue, 
        jika initialValue tidak diset maka form dianggap memiliki nilai default kosong
        */
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        // memberikan nilai pada form
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label for="inputFirstName" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputLastName" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputEmployed" className="col-sm-2 col-form-label">
              Employed
            </label>
            <div className="col-sm-10">
              <Field
                name="employed"
                component="input"
                type="checkbox"
                className="form-check-input"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputEducation" className="col-sm-2 col-form-label">
              Education
            </label>
            <div className="col-sm-10">
              <Field
                name="education"
                className="form-select"
                component="select"
              >
                <option>Select Education</option>
                <option value="high school">High School</option>
                <option value="bachelor degree">Bachelor Degree</option>
                <option value="master degree">Master Degre</option>
              </Field>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputExpertise" className="col-sm-2 col-form-label">
              Expertise
            </label>
            <div className="col-sm-10">
              <Field
                name="expertise"
                component="input"
                type="checkbox"
                className="form-check-input"
                value="HTML"
              />{" "}
              HTML <br />
              <Field
                name="expertise"
                component="input"
                type="checkbox"
                className="form-check-input"
                value="CSS"
              />{" "}
              CSS <br />
              <Field
                name="expertise"
                component="input"
                type="checkbox"
                className="form-check-input"
                value="Javascript"
              />{" "}
              Javascript
              <br />
              <Field
                name="expertise"
                component="input"
                type="checkbox"
                className="form-check-input"
                value="NodeJS"
              />{" "}
              NodeJS
              <br />
              <Field
                name="expertise"
                component="input"
                type="checkbox"
                className="form-check-input"
                value="ReactJS"
              />{" "}
              ReactJS
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputExpertise" className="col-sm-2 col-form-label">
              Preferred Technology
            </label>
            <div className="col-sm-10">
              <Field
                name="preferred-technology"
                component="input"
                type="radio"
                className="form-check-input"
                value="Front End"
              />{" "}
              Front End <br />
              <Field
                name="preferred-technology"
                component="input"
                type="radio"
                className="form-check-input"
                value="Back End"
              />{" "}
              Back End
              <br />
              <Field
                name="preferred-technology"
                component="input"
                type="radio"
                className="form-check-input"
                value="Full Stack"
              />{" "}
              Full Stack
              <br />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputNote" className="col-sm-2 col-form-label">
              Note
            </label>
            <div className="col-sm-10">
              <Field
                name="notes"
                component="textarea"
                placeholder="Notes"
                className="form-control"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              // memberikan nilai disabled berdasarkan submitting dan pristine
              disabled={submitting || pristine}
              className="btn btn-primary btn-sm"
            >
              Submit
            </button>{" "}
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
              className="btn btn-secondary btn-sm"
            >
              Reset
            </button>
          </div>
          <div className="mt-3">
            <b>Result</b>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </div>
        </form>
      )}
    />
  );
};

export default FormComp;

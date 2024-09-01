export default function Validation(req, res, next) {

  let { firstName, lastName, password, email, phone } = req.body;

  const namePattern = /^[A-Z][a-z]*$/;
  if (!namePattern.test(firstName)) {
    return next({
      status: 400,
      message:
        "First name must start with a capital letter and contain only letters.",
    });
  }
  if (!namePattern.test(lastName)) {
    return next({
      status: 400,
      message:
        "Last name must start with a capital letter and contain only letters.",
    });
  }

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if (!passwordPattern.test(password)) {
    return next({
      status: 400,
      message:
        "Password must be at least 8 characters long and include one uppercase letter, one special character, and one number.",
    });
  }

  if (!email.includes("@")) {
    return next({
      status: 400,
      message: 'Email address must contain "@" symbol.',
    });
  }

  const phonePattern = /^\d{10,}$/;
  if (!phonePattern.test(phone)) {
    return next({
      status: 400,
      message: "Phone number must be at least 10 digits long.",
    });
  }

  next();
}

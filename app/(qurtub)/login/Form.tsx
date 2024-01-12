// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { IoPerson } from 'react-icons/io5';
// import { MdOutlineMail } from 'react-icons/md';
// import { RiLockLine } from 'react-icons/ri';

// const SignUpForm = () => {
//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         email: "",
//         password: "",
//       }}
//       validationSchema={Yup.object({
//         name: Yup.string()
//           .required("Name is required")
//           .min(4, "Name should be at least 4 characters")
//           .max(20, "Name should not exceed 20 characters"),
//         email: Yup.string()
//           .email("Invalid email address")
//           .required("Email is required"),
//         password: Yup.string()
//           .required("Password is required")
//           .matches(
//             /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//             "Password should contain at least one uppercase letter, one symbol, and one number"
//           ),
//       })}
//       onSubmit={(values) => {
//         console.log("Form submitted:", values);
//       }}
//     >
//       {({ isValid }) => (
//         <Form className="flex flex-col gap-5 w-full">
//           <div className="flex relative flex-col w-[230px]">
//             <IoPerson className="absolute fill-slate-400 mt-2 ml-2" size={20} />
//             <Field
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="bg-gray-200 rounded-md h-40px p-2 pl-9"
//             />
//             <ErrorMessage
//               name="name"
//               component="div"
//               className="text-red-500"
//             />
//           </div>
//           <div className="flex relative flex-col w-[230px]">
//             <MdOutlineMail
//               className="absolute fill-slate-400 mt-2 ml-2"
//               size={20}
//             />
//             <Field
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="bg-gray-200 rounded-md h-40px p-2 pl-9"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="text-red-500"
//             />
//           </div>
//           <div className="flex relative flex-col w-[230px]">
//             <RiLockLine
//               className="absolute fill-slate-400 mt-2 ml-2"
//               size={20}
//             />
//             <Field
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="bg-gray-200 rounded-md h-40px p-2 pl-9"
//             />
//             <ErrorMessage
//               name="password"
//               component="div"
//               className="text-red-500"
//             />
//           </div>
//           <div className="w-[150px] text-sm font-bold text-white ml-10 h-[50px] bg-emerald-400 hover:bg-emerald-600  border border-emerald-50 rounded-2xl shadow-lg shadow-gray-400 flex justify-center items-center">
//             <button
//               type="submit"
//               className={`${!isValid ? "opacity-50 cursor-not-allowed" : ""}`}
//               disabled={!isValid}
//             >
//               SIGN UP
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default SignUpForm;
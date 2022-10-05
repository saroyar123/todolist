const User = require("../model/user");

exports.login = async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;

    const user = await User.create({ name: name, password: password });
    await user.save();

    await res.status(200).json({
      success: true,
      message: "you are login",
      user,
    });
  } catch (error) {
    await res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// for register in our todo list
exports.register = async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    const user = await User.findOne({ email: email });

    if (user) {
     return  res.status(200).json({
        success: true,
        message: "user already exist",
      });
    }

   const  newUser=await User.create({name:name,password:password,email:email});
    await newUser.save();

     res.status(200).json({
      success:true,
      message:"user created",
      newUser

     })


  } catch (error) {
    res.status(404).json({
      success:false,
      message:error.message
    })
  }
};

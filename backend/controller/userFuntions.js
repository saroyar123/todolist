const User = require("../model/user");
const jwt = require("jsonwebtoken");

// login user
exports.login = async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Register first",
      });
    }

    if (user && user.password !== password) {
      return res.status(200).json({
        success: false,
        message: "wrong password",
      });
    }

    const token = jwt.sign({ email: email }, process.env.jwt_private_key);

    user.token = token;

    const option = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    // console.log(req.user);

    res.cookie("token", token, option).status(200).json({
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

    if (!name || !password || !email) {
      return res.status(200).json({
        success: false,
        message: "gives all inputs",
      });
    }

    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(200).json({
        success: true,
        message: "user already exist",
      });
    }

    // console.log(process.env.jwt_private_key);
    const newUser = await User.create({
      name: name,
      password: password,
      email: email,
    });

    const token = jwt.sign({ email: email }, process.env.jwt_private_key);

    newUser.token = token;
    await newUser.save();

    const option = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, option).json({
      success: true,
      message: "user created",
      newUser,
      token,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// logout account

exports.logout = async (req, res) => {
  try {
    // console.log(req.user);
    const user = await User.findOne({ email: req.user.email });

    if (!user) {
      return res.status(200).json({
        success: false,
        message: "login first",
      });
    }

    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "you are logout successfully",
      });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// delete account parmanenetly

exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    await user.remove();

    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: false,
        message: "your account is deleted",
      });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

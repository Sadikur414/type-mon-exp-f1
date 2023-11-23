"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "FirstName is required"],
    },
    middleName: {
        type: String,
        required: [true, "MidName is required"],
    },
    lastName: {
        type: String,
        required: [true, "LastName is required"],
    }
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupation: {
        type: String,
        required: true
    },
    fatherContactNo: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    motherOccupation: {
        type: String,
        required: true
    },
    motherContactNo: {
        type: String,
        required: true
    },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    contuctNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String,
        required: true,
        unique: true
    },
    name: {
        type: userSchema,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            massage: '{VALUE} is not valid',
        },
        required: true,
    },
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergencyContuctNo: { type: String },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "O+", "AB+", "AB-"],
    },
    presentAddress: { type: String, required: true },
    guardian: {
        type: guardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
    },
    profileImg: {
        type: String
    },
    isActive: {
        type: String,
        enum: ['active', 'inActive'],
        default: "active"
    }
});
//modeling
exports.StudentModel = (0, mongoose_1.model)('Student', studentSchema);

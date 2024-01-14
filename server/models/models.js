const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Users = sequelize.define('Users', {
  Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING(50), allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  /*Patient_Id: {
      type: DataTypes.INTEGER,
      validate: {
          onlyOneIdPresent() {
              if ((this.Patient_Id !== null && this.Doctor_Id !== null) || (this.Patient_Id === null && this.Doctor_Id === null)) {
                  throw new Error('Either Patient_Id or Doctor_Id should be present');
              }
          },
      },
  },*/
  /*Doctor_Id: {
      type: DataTypes.INTEGER,
      validate: {
          onlyOneIdPresent() {
              if ((this.Patient_Id !== null && this.Doctor_Id !== null) || (this.Patient_Id === null && this.Doctor_Id === null)) {
                  throw new Error('Either Patient_Id or Doctor_Id should be present');
              }
          },
      },
  },*/
  IsEmployee: { type: DataTypes.BOOLEAN, allowNull: false },
  },
  {timestamps: false});
  
  const MedicalResult = sequelize.define('MedicalResult', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Diagnose: { type: DataTypes.STRING(50), allowNull: false },
    Conclusion: { type: DataTypes.STRING(50) },
    Date: { type: DataTypes.DATE },
    //Doctor_Id: { type: DataTypes.INTEGER, allowNull: false },
    //Patietn_Id: { type: DataTypes.INTEGER, allowNull: false },
    //Appoitment_Id: { type: DataTypes.INTEGER },
  },
  {timestamps: false});
  const DoctorSchedule = sequelize.define('DoctorSchedule', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Day_of_week: { type: DataTypes.STRING(50), allowNull: false },
    Start: { type: DataTypes.TIME },
    End: { type: DataTypes.TIME },
  },
  {timestamps: false});
  const Department = sequelize.define('Department', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    Specialization: { type: DataTypes.STRING(50) },
  },
  {timestamps: false});
  const Service = sequelize.define('Service', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(200), allowNull: false },
    Cost: { type: DataTypes.DECIMAL },
    Specialization: { type: DataTypes.STRING(50) },
    //Department_Id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {timestamps: false});
  const Appointment = sequelize.define('Appointment', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //Patient_Id: { type: DataTypes.INTEGER, allowNull: false },
    //Service_Id: { type: DataTypes.INTEGER, allowNull: false },
    Date: { type: DataTypes.DATE, allowNull: false },
    //Doctor_Id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {timestamps: false});
  const Patient = sequelize.define('Patient', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    BirthDate: { type: DataTypes.DATE },
    Gender: { type: DataTypes.STRING(50) },
    Number: { type: DataTypes.STRING(15) },
    Adress: { type: DataTypes.STRING(50) },
  },
  {timestamps: false});
  const Doctor = sequelize.define('Doctor', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    Specialization: { type: DataTypes.STRING(50) },
    WorkExp: { type: DataTypes.INTEGER },
    //Department_Id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {timestamps: false});
  Doctor.hasMany(Users);
  Users.belongsTo(Doctor);

  Patient.hasMany(Users);
  Users.belongsTo(Patient);

  Appointment.hasMany(MedicalResult);
  MedicalResult.belongsTo(Appointment);

  Doctor.hasMany(MedicalResult);
  MedicalResult.belongsTo(Doctor);

  Patient.hasMany(MedicalResult);
  MedicalResult.belongsTo(Patient);
  
  Doctor.hasMany(DoctorSchedule);
  DoctorSchedule.belongsTo(Doctor);
  
  Department.hasMany(Service);
  Service.belongsTo(Department);
  
  Doctor.hasMany(Appointment);
  Appointment.belongsTo(Doctor);

  Patient.hasMany(Appointment);
  Appointment.belongsTo(Patient);

  Service.hasMany(Appointment);
  Appointment.belongsTo(Service);
  
  Department.hasMany(Doctor);
  Doctor.belongsTo(Department);

  module.exports = {
    Users,
    MedicalResult,
    Appointment,
    Doctor,
    Patient,
    Service,
    Department, 
    DoctorSchedule
  };
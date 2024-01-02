const sequelize = require('../db');
const { DataTypes } = require('sequelize');

  const Users = sequelize.define('Users', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING(50), allowNull: false },
    password: { type: DataTypes.STRING(50), allowNull: false },
    Patient_Id: { type: DataTypes.INTEGER },
    Doctor_Id: { type: DataTypes.INTEGER },
    IsEmployee: { type: DataTypes.BOOLEAN, allowNull: false },
  });
  
  const MedicalResult = sequelize.define('MedicalResult', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Diagnose: { type: DataTypes.STRING(50), allowNull: false },
    Conclusion: { type: DataTypes.STRING(50) },
    Date: { type: DataTypes.DATE },
    Doctor_Id: { type: DataTypes.INTEGER, allowNull: false },
    Patietn_Id: { type: DataTypes.INTEGER, allowNull: false },
    Appoitment_Id: { type: DataTypes.INTEGER },
    Picture: { type: DataTypes.BLOB },
  });
  
  const DoctorSchedule = sequelize.define('DoctorSchedule', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Doctors_Id: { type: DataTypes.INTEGER, allowNull: false },
    Day_of_week: { type: DataTypes.STRING(50), allowNull: false },
    Start: { type: DataTypes.TIME },
    End: { type: DataTypes.TIME },
  });
  
  const Department = sequelize.define('Department', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    Specialization: { type: DataTypes.STRING(50) },
  });
  
  const Service = sequelize.define('Service', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    Cost: { type: DataTypes.DECIMAL },
    Specialization: { type: DataTypes.STRING(50) },
    Department_Id: { type: DataTypes.INTEGER, allowNull: false },
  });
  
  const Appointment = sequelize.define('Appointment', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Patient_Id: { type: DataTypes.INTEGER, allowNull: false },
    Service_Id: { type: DataTypes.INTEGER, allowNull: false },
    Date: { type: DataTypes.DATE, allowNull: false },
    Doctor_Id: { type: DataTypes.INTEGER, allowNull: false },
  });
  
  const Patient = sequelize.define('Patient', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    BirthDate: { type: DataTypes.DATE },
    Gender: { type: DataTypes.STRING(50) },
    Number: { type: DataTypes.STRING(15) },
    Adress: { type: DataTypes.STRING(50) },
  });
  
  const Doctor = sequelize.define('Doctor', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    Specialization: { type: DataTypes.STRING(50) },
    WorkExp: { type: DataTypes.INTEGER },
    Department_Id: { type: DataTypes.INTEGER, allowNull: false },
  });

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
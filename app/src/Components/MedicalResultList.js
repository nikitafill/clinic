import React, { useState, useEffect } from 'react';
import { getMedicalResultsByDoctorId, getMedicalResultsByPatientInfo } from "./api/medResultAPI";
import MedicalResult from './MedicalResult';

function MedicalResultsList ({ doctorId, patientInfo }) {
  const [medicalResults, setMedicalResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (doctorId) {
          data = await getMedicalResultsByDoctorId(doctorId);
        } else if (patientInfo) {
          data = await getMedicalResultsByPatientInfo(patientInfo);
        }
        setMedicalResults(data);
      } catch (error) {/*
        console.error('Error fetching medical results:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
      */};
    }
    fetchData();
  }, [doctorId, patientInfo]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {medicalResults && medicalResults.map((result) => (
        <MedicalResult key={result.Id} result={result} />
      ))}
    </div>
  );
};

export default MedicalResultsList;

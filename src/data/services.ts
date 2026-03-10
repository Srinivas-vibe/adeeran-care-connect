import {
  FaUserNurse, FaBaby, FaUserFriends, FaHospitalUser, FaSyringe,
  FaVial, FaFemale, FaBed, FaHeartbeat, FaHandHoldingHeart,
  FaCut, FaBrain, FaBone, FaHandsHelping, FaToilet,
  FaUserMd, FaPuzzlePiece, FaUtensils, FaLungs, FaNotesMedical,
  FaWind, FaBandAid, FaStethoscope, FaMedkit, FaOm, FaComments
} from 'react-icons/fa';

import nurseCareImg from '@/assets/nurse-care.jpg';
import babyCareImg from '@/assets/baby-care.jpg';
import elderlyCareImg from '@/assets/elderly-care.jpg';
import patientCareImg from '@/assets/patient-care.jpg';
import injectionImg from '@/assets/injection-service.jpg';
import bloodTestImg from '@/assets/blood-test.jpg';
import motherBabyImg from '@/assets/mother-baby-care.jpg';
import bedriddenImg from '@/assets/bedridden-care.jpg';
import icuCareImg from '@/assets/icu-care.jpg';
import palliativeImg from '@/assets/palliative-care.jpg';
import surgicalImg from '@/assets/surgical-care.jpg';
import neuroImg from '@/assets/neuro-care.jpg';
import seniorImg from '@/assets/senior-care.jpg';
import respiratoryImg from '@/assets/respiratory-care.jpg';
import generalImg from '@/assets/general-nursing.jpg';
import yogaImg from '@/assets/yoga-therapy.jpg';
import speechImg from '@/assets/speech-therapy.jpg';
import orthoImg from '@/assets/patient-care.jpg';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  benefits: string[];
  image: string;
}

export const services: Service[] = [
  { id: 'nurse-care', title: 'Nurse Care Service', description: 'Professional trained nurses providing round-the-clock medical care at your home, ensuring comfort and recovery.', icon: FaUserNurse, benefits: ['Certified nurses', 'Personalized care plans', 'Medication management', 'Vital signs monitoring'], image: nurseCareImg },
  { id: 'baby-care', title: 'Baby Care Service', description: 'Expert newborn and infant care services including feeding, bathing, and developmental monitoring by trained professionals.', icon: FaBaby, benefits: ['Newborn care expertise', 'Feeding assistance', 'Growth monitoring', 'Parent guidance'], image: babyCareImg },
  { id: 'elderly-care', title: 'Elderly Care Service', description: 'Compassionate and dedicated elderly care services ensuring dignity, comfort, and quality of life for senior members.', icon: FaUserFriends, benefits: ['Daily living assistance', 'Companionship', 'Safety monitoring', 'Mobility support'], image: elderlyCareImg },
  { id: 'patient-care', title: 'Patient Care Service', description: 'Comprehensive patient care at home covering post-hospitalization recovery and chronic condition management.', icon: FaHospitalUser, benefits: ['Recovery support', 'Chronic care management', 'Health monitoring', 'Family coordination'], image: patientCareImg },
  { id: 'injection-service', title: 'Injection Service', description: 'Safe and hygienic injection administration at home by qualified healthcare professionals.', icon: FaSyringe, benefits: ['Sterile technique', 'Qualified staff', 'Timely administration', 'Pain management'], image: injectionImg },
  { id: 'blood-test', title: 'Blood Test Service', description: 'Convenient home blood sample collection with accurate lab testing and quick report delivery.', icon: FaVial, benefits: ['Home collection', 'Quick reports', 'Accurate results', 'Multiple test panels'], image: bloodTestImg },
  { id: 'mother-baby-care', title: 'Mother and Baby Care', description: 'Specialized care for new mothers and babies, covering post-delivery recovery and newborn health.', icon: FaFemale, benefits: ['Post-delivery care', 'Breastfeeding support', 'Baby health monitoring', 'Mother wellness'], image: motherBabyImg },
  { id: 'bed-ridden-care', title: 'Bed Ridden Patient Care', description: 'Dedicated care for bed-ridden patients including hygiene, nutrition, and pressure sore prevention.', icon: FaBed, benefits: ['Pressure sore prevention', 'Hygiene maintenance', 'Nutrition management', 'Position changes'], image: bedriddenImg },
  { id: 'icu-patient-care', title: 'ICU Patient Care', description: 'Hospital-grade intensive care at home with trained ICU nurses and advanced monitoring equipment.', icon: FaHeartbeat, benefits: ['Critical care expertise', 'Continuous monitoring', 'Emergency response', 'Equipment management'], image: icuCareImg },
  { id: 'palliative-care', title: 'Palliative Care', description: 'Compassionate end-of-life care focused on pain management, comfort, and emotional support for patients and families.', icon: FaHandHoldingHeart, benefits: ['Pain management', 'Emotional support', 'Family counseling', 'Comfort-focused care'], image: palliativeImg },
  { id: 'pre-post-surgical', title: 'Pre & Post Surgical Care', description: 'Expert care before and after surgeries ensuring optimal preparation and smooth recovery.', icon: FaCut, benefits: ['Pre-op preparation', 'Wound care', 'Recovery monitoring', 'Complication prevention'], image: surgicalImg },
  { id: 'neurological-care', title: 'Neurological Care', description: 'Specialized nursing care for patients with neurological conditions like stroke, Parkinson\'s, and brain injuries.', icon: FaBrain, benefits: ['Stroke rehabilitation', 'Cognitive exercises', 'Mobility training', 'Medication management'], image: neuroImg },
  { id: 'ortho-care', title: 'Ortho Care', description: 'Orthopedic care including post-fracture management, joint replacement recovery, and physiotherapy.', icon: FaBone, benefits: ['Fracture care', 'Joint rehabilitation', 'Physiotherapy', 'Mobility restoration'], image: orthoImg },
  { id: 'healthcare-assistance', title: 'Healthcare Assistance', description: 'General healthcare support for daily medical needs, medication reminders, and health monitoring.', icon: FaHandsHelping, benefits: ['Daily health support', 'Medication reminders', 'Health tracking', 'Doctor coordination'], image: generalImg },
  { id: 'urine-catheterization', title: 'Urine Catheterization with Care', description: 'Safe and hygienic urinary catheter insertion, maintenance, and removal by trained nursing professionals.', icon: FaToilet, benefits: ['Sterile procedure', 'Infection prevention', 'Regular maintenance', 'Comfort-focused'], image: generalImg },
  { id: 'senior-nursing', title: 'Senior Nursing Care', description: 'Specialized nursing care tailored for senior citizens, addressing age-related health challenges with expertise.', icon: FaUserMd, benefits: ['Geriatric expertise', 'Fall prevention', 'Chronic care', 'Wellness programs'], image: seniorImg },
  { id: 'dementia-care', title: 'Dementia Care', description: 'Patient and understanding care for dementia patients, maintaining routine and safety while supporting cognitive function.', icon: FaPuzzlePiece, benefits: ['Routine maintenance', 'Safety assurance', 'Cognitive stimulation', 'Family education'], image: seniorImg },
  { id: 'ryles-tube-feeding', title: "Ryle's Tube Feeding", description: 'Professional nasogastric tube feeding services ensuring proper nutrition for patients unable to eat normally.', icon: FaUtensils, benefits: ['Proper nutrition', 'Tube maintenance', 'Hygiene standards', 'Feeding schedules'], image: bedriddenImg },
  { id: 'tracheostomy-care', title: 'Tracheostomy Care', description: 'Expert tracheostomy tube care including suctioning, cleaning, and emergency management.', icon: FaLungs, benefits: ['Airway management', 'Tube cleaning', 'Suctioning', 'Emergency readiness'], image: respiratoryImg },
  { id: 'im-iv-service', title: 'IM / IV Service', description: 'Intramuscular and intravenous medication administration at home by certified healthcare professionals.', icon: FaNotesMedical, benefits: ['Safe administration', 'Sterile technique', 'Dosage accuracy', 'Reaction monitoring'], image: injectionImg },
  { id: 'inhalation-therapy', title: 'Inhalation Therapy', description: 'Professional nebulization and inhalation therapy services for respiratory conditions at home.', icon: FaWind, benefits: ['Respiratory relief', 'Equipment setup', 'Therapy guidance', 'Condition monitoring'], image: respiratoryImg },
  { id: 'post-operative-care', title: 'Post Operative Care', description: 'Comprehensive post-surgery recovery care including wound management, pain control, and rehabilitation.', icon: FaBandAid, benefits: ['Wound management', 'Pain control', 'Recovery tracking', 'Rehabilitation support'], image: surgicalImg },
  { id: 'general-skilled-nursing', title: 'General Skilled Nursing Care', description: 'Broad-spectrum skilled nursing services covering assessments, treatments, and health education at home.', icon: FaStethoscope, benefits: ['Health assessments', 'Treatment plans', 'Health education', 'Care coordination'], image: generalImg },
  { id: 'tracheostomy-ventilator', title: 'Tracheostomy & Ventilator Care', description: 'Advanced care for ventilator-dependent patients with tracheostomy, ensuring safe and comfortable home care.', icon: FaMedkit, benefits: ['Ventilator management', 'Airway care', '24/7 monitoring', 'Emergency protocols'], image: icuCareImg },
  { id: 'neuro-care', title: 'Neuro Care', description: 'Comprehensive neurological nursing care for patients with brain and nervous system disorders.', icon: FaBrain, benefits: ['Neurological assessments', 'Rehabilitation exercises', 'Medication management', 'Progress tracking'], image: neuroImg },
  { id: 'yoga-therapy', title: 'Yoga Therapy', description: 'Therapeutic yoga sessions at home designed for recovery, stress relief, and overall wellness improvement.', icon: FaOm, benefits: ['Customized routines', 'Pain relief', 'Stress reduction', 'Flexibility improvement'], image: yogaImg },
  { id: 'speech-therapy', title: 'Speech Therapy', description: 'Professional speech and language therapy at home for patients recovering from stroke, injury, or developmental issues.', icon: FaComments, benefits: ['Speech rehabilitation', 'Swallowing therapy', 'Language development', 'Communication aids'], image: speechImg },
];

export const nursingShifts = [
  { title: '12 Hours Nursing', description: 'Dedicated nursing care for 12-hour day or night shifts, ideal for patients needing part-time professional medical supervision.', features: ['Day or Night shift', 'Medication management', 'Vital monitoring', 'Care documentation'] },
  { title: '24 Hours Nursing', description: 'Round-the-clock nursing care with dedicated nurses ensuring continuous medical supervision and support.', features: ['Continuous care', 'Shift handovers', 'Emergency readiness', 'Complete documentation'] },
];

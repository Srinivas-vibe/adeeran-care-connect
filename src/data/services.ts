import {
  FaUserNurse, FaBaby, FaUserFriends, FaHospitalUser, FaSyringe,
  FaVial, FaFemale, FaBed, FaHeartbeat, FaHandHoldingHeart,
  FaCut, FaBrain, FaBone, FaHandsHelping, FaToilet,
  FaUserMd, FaPuzzlePiece, FaUtensils, FaLungs, FaNotesMedical,
  FaWind, FaBandAid, FaStethoscope, FaMedkit, FaOm, FaComments
} from 'react-icons/fa';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  benefits: string[];
}

export const services: Service[] = [
  { id: 'nurse-care', title: 'Nurse Care Service', description: 'Professional trained nurses providing round-the-clock medical care at your home, ensuring comfort and recovery.', icon: FaUserNurse, benefits: ['Certified nurses', 'Personalized care plans', 'Medication management', 'Vital signs monitoring'] },
  { id: 'baby-care', title: 'Baby Care Service', description: 'Expert newborn and infant care services including feeding, bathing, and developmental monitoring by trained professionals.', icon: FaBaby, benefits: ['Newborn care expertise', 'Feeding assistance', 'Growth monitoring', 'Parent guidance'] },
  { id: 'elderly-care', title: 'Elderly Care Service', description: 'Compassionate and dedicated elderly care services ensuring dignity, comfort, and quality of life for senior members.', icon: FaUserFriends, benefits: ['Daily living assistance', 'Companionship', 'Safety monitoring', 'Mobility support'] },
  { id: 'patient-care', title: 'Patient Care Service', description: 'Comprehensive patient care at home covering post-hospitalization recovery and chronic condition management.', icon: FaHospitalUser, benefits: ['Recovery support', 'Chronic care management', 'Health monitoring', 'Family coordination'] },
  { id: 'injection-service', title: 'Injection Service', description: 'Safe and hygienic injection administration at home by qualified healthcare professionals.', icon: FaSyringe, benefits: ['Sterile technique', 'Qualified staff', 'Timely administration', 'Pain management'] },
  { id: 'blood-test', title: 'Blood Test Service', description: 'Convenient home blood sample collection with accurate lab testing and quick report delivery.', icon: FaVial, benefits: ['Home collection', 'Quick reports', 'Accurate results', 'Multiple test panels'] },
  { id: 'mother-baby-care', title: 'Mother and Baby Care', description: 'Specialized care for new mothers and babies, covering post-delivery recovery and newborn health.', icon: FaFemale, benefits: ['Post-delivery care', 'Breastfeeding support', 'Baby health monitoring', 'Mother wellness'] },
  { id: 'bed-ridden-care', title: 'Bed Ridden Patient Care', description: 'Dedicated care for bed-ridden patients including hygiene, nutrition, and pressure sore prevention.', icon: FaBed, benefits: ['Pressure sore prevention', 'Hygiene maintenance', 'Nutrition management', 'Position changes'] },
  { id: 'icu-patient-care', title: 'ICU Patient Care', description: 'Hospital-grade intensive care at home with trained ICU nurses and advanced monitoring equipment.', icon: FaHeartbeat, benefits: ['Critical care expertise', 'Continuous monitoring', 'Emergency response', 'Equipment management'] },
  { id: 'palliative-care', title: 'Palliative Care', description: 'Compassionate end-of-life care focused on pain management, comfort, and emotional support for patients and families.', icon: FaHandHoldingHeart, benefits: ['Pain management', 'Emotional support', 'Family counseling', 'Comfort-focused care'] },
  { id: 'pre-post-surgical', title: 'Pre & Post Surgical Care', description: 'Expert care before and after surgeries ensuring optimal preparation and smooth recovery.', icon: FaCut, benefits: ['Pre-op preparation', 'Wound care', 'Recovery monitoring', 'Complication prevention'] },
  { id: 'neurological-care', title: 'Neurological Care', description: 'Specialized nursing care for patients with neurological conditions like stroke, Parkinson\'s, and brain injuries.', icon: FaBrain, benefits: ['Stroke rehabilitation', 'Cognitive exercises', 'Mobility training', 'Medication management'] },
  { id: 'ortho-care', title: 'Ortho Care', description: 'Orthopedic care including post-fracture management, joint replacement recovery, and physiotherapy.', icon: FaBone, benefits: ['Fracture care', 'Joint rehabilitation', 'Physiotherapy', 'Mobility restoration'] },
  { id: 'healthcare-assistance', title: 'Healthcare Assistance', description: 'General healthcare support for daily medical needs, medication reminders, and health monitoring.', icon: FaHandsHelping, benefits: ['Daily health support', 'Medication reminders', 'Health tracking', 'Doctor coordination'] },
  { id: 'urine-catheterization', title: 'Urine Catheterization with Care', description: 'Safe and hygienic urinary catheter insertion, maintenance, and removal by trained nursing professionals.', icon: FaToilet, benefits: ['Sterile procedure', 'Infection prevention', 'Regular maintenance', 'Comfort-focused'] },
  { id: 'senior-nursing', title: 'Senior Nursing Care', description: 'Specialized nursing care tailored for senior citizens, addressing age-related health challenges with expertise.', icon: FaUserMd, benefits: ['Geriatric expertise', 'Fall prevention', 'Chronic care', 'Wellness programs'] },
  { id: 'dementia-care', title: 'Dementia Care', description: 'Patient and understanding care for dementia patients, maintaining routine and safety while supporting cognitive function.', icon: FaPuzzlePiece, benefits: ['Routine maintenance', 'Safety assurance', 'Cognitive stimulation', 'Family education'] },
  { id: 'ryles-tube-feeding', title: "Ryle's Tube Feeding", description: 'Professional nasogastric tube feeding services ensuring proper nutrition for patients unable to eat normally.', icon: FaUtensils, benefits: ['Proper nutrition', 'Tube maintenance', 'Hygiene standards', 'Feeding schedules'] },
  { id: 'tracheostomy-care', title: 'Tracheostomy Care', description: 'Expert tracheostomy tube care including suctioning, cleaning, and emergency management.', icon: FaLungs, benefits: ['Airway management', 'Tube cleaning', 'Suctioning', 'Emergency readiness'] },
  { id: 'im-iv-service', title: 'IM / IV Service', description: 'Intramuscular and intravenous medication administration at home by certified healthcare professionals.', icon: FaNotesMedical, benefits: ['Safe administration', 'Sterile technique', 'Dosage accuracy', 'Reaction monitoring'] },
  { id: 'inhalation-therapy', title: 'Inhalation Therapy', description: 'Professional nebulization and inhalation therapy services for respiratory conditions at home.', icon: FaWind, benefits: ['Respiratory relief', 'Equipment setup', 'Therapy guidance', 'Condition monitoring'] },
  { id: 'post-operative-care', title: 'Post Operative Care', description: 'Comprehensive post-surgery recovery care including wound management, pain control, and rehabilitation.', icon: FaBandAid, benefits: ['Wound management', 'Pain control', 'Recovery tracking', 'Rehabilitation support'] },
  { id: 'general-skilled-nursing', title: 'General Skilled Nursing Care', description: 'Broad-spectrum skilled nursing services covering assessments, treatments, and health education at home.', icon: FaStethoscope, benefits: ['Health assessments', 'Treatment plans', 'Health education', 'Care coordination'] },
  { id: 'tracheostomy-ventilator', title: 'Tracheostomy & Ventilator Care', description: 'Advanced care for ventilator-dependent patients with tracheostomy, ensuring safe and comfortable home care.', icon: FaMedkit, benefits: ['Ventilator management', 'Airway care', '24/7 monitoring', 'Emergency protocols'] },
  { id: 'neuro-care', title: 'Neuro Care', description: 'Comprehensive neurological nursing care for patients with brain and nervous system disorders.', icon: FaBrain, benefits: ['Neurological assessments', 'Rehabilitation exercises', 'Medication management', 'Progress tracking'] },
  { id: 'yoga-therapy', title: 'Yoga Therapy', description: 'Therapeutic yoga sessions at home designed for recovery, stress relief, and overall wellness improvement.', icon: FaOm, benefits: ['Customized routines', 'Pain relief', 'Stress reduction', 'Flexibility improvement'] },
  { id: 'speech-therapy', title: 'Speech Therapy', description: 'Professional speech and language therapy at home for patients recovering from stroke, injury, or developmental issues.', icon: FaComments, benefits: ['Speech rehabilitation', 'Swallowing therapy', 'Language development', 'Communication aids'] },
];

export const nursingShifts = [
  { title: '12 Hours Nursing', description: 'Dedicated nursing care for 12-hour day or night shifts, ideal for patients needing part-time professional medical supervision.', features: ['Day or Night shift', 'Medication management', 'Vital monitoring', 'Care documentation'] },
  { title: '24 Hours Nursing', description: 'Round-the-clock nursing care with dedicated nurses ensuring continuous medical supervision and support.', features: ['Continuous care', 'Shift handovers', 'Emergency readiness', 'Complete documentation'] },
];

import { TimeSlot } from '../../types';

const generateSlots = () => {
  const slots: TimeSlot[] = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateString = date.toISOString().split('T')[0];
    
    // Add slots for facilitator f1
    slots.push({
      id: `slot_f1_${i}_1`,
      facilitator_id: 'f1',
      date: dateString,
      start_time: '10:00',
      end_time: '11:00',
      is_available: true,
      is_blocked: false
    });
    slots.push({
      id: `slot_f1_${i}_2`,
      facilitator_id: 'f1',
      date: dateString,
      start_time: '13:00',
      end_time: '14:00',
      is_available: i % 3 === 0 ? false : true, // Randomly booked
      is_blocked: false
    });

    // Add slots for facilitator f3 (peer counselor)
    slots.push({
      id: `slot_f3_${i}_1`,
      facilitator_id: 'f3',
      date: dateString,
      start_time: '16:00',
      end_time: '17:00',
      is_available: true,
      is_blocked: false
    });
  }
  
  return slots;
};

export const availability: TimeSlot[] = generateSlots();

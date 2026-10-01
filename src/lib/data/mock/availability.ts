import { TimeSlot } from '../../types';

const generateSlots = () => {
  const slots: TimeSlot[] = [];
  const today = new Date();
  
  const facilitators = ['f1', 'f2', 'f3', 'f4'];
  const speakers = ['spk_1', 'spk_2', 'spk_3', 'spk_4'];

  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateString = date.toISOString().split('T')[0];
    
    // Slots for all facilitators
    facilitators.forEach((fId) => {
      slots.push({
        id: `slot_${fId}_${i}_1`,
        facilitator_id: fId,
        date: dateString,
        start_time: '09:00',
        end_time: '09:50',
        is_available: true,
        is_blocked: false,
      });
      slots.push({
        id: `slot_${fId}_${i}_2`,
        facilitator_id: fId,
        date: dateString,
        start_time: '11:00',
        end_time: '11:50',
        is_available: i % 4 !== 0,
        is_blocked: false,
      });
      slots.push({
        id: `slot_${fId}_${i}_3`,
        facilitator_id: fId,
        date: dateString,
        start_time: '14:00',
        end_time: '14:50',
        is_available: true,
        is_blocked: false,
      });
      slots.push({
        id: `slot_${fId}_${i}_4`,
        facilitator_id: fId,
        date: dateString,
        start_time: '16:00',
        end_time: '16:50',
        is_available: i % 5 !== 0,
        is_blocked: false,
      });
    });

    // Slots for speakers
    speakers.forEach((sId) => {
      slots.push({
        id: `slot_${sId}_${i}_1`,
        speaker_id: sId,
        date: dateString,
        start_time: '09:00',
        end_time: '12:00',
        is_available: true,
        is_blocked: false,
      });
      slots.push({
        id: `slot_${sId}_${i}_2`,
        speaker_id: sId,
        date: dateString,
        start_time: '13:30',
        end_time: '16:30',
        is_available: true,
        is_blocked: false,
      });
    });
  }
  
  return slots;
};

export const availability: TimeSlot[] = generateSlots();

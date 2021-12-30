import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://witsodqqjbrlgpnxvsra.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDc4OTEwMiwiZXhwIjoxOTU2MzY1MTAyfQ.UydY4a4fkZKQ3VnxL9eR72KPixB_eO54RsohKW9hwv0';
export const supabase = createClient(supabaseUrl, supabaseKey);
export const resumeUrl = `https://witsodqqjbrlgpnxvsra.supabase.in/storage/v1/object/sign/resume-bucket/My Resume.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWUtYnVja2V0L015IFJlc3VtZS5wZGYiLCJpYXQiOjE2NDA3ODk5NTUsImV4cCI6MTk1NjE0OTk1NX0.-gV8KjxKGeIfAB6Rd0KBM2UJs7eu_AKzmpTIzyrEGck`;



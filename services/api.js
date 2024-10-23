import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wqhhsecttjtiutlqldyr.supabase.co/rest/v1',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaGhzZWN0dGp0aXV0bHFsZHlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTUzNDU3NSwiZXhwIjoyMDQ1MTEwNTc1fQ.mFotM0LgFspN1tmAhFoC-oD5xZNw8ArsYRRrjpsczKg',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaGhzZWN0dGp0aXV0bHFsZHlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTUzNDU3NSwiZXhwIjoyMDQ1MTEwNTc1fQ.mFotM0LgFspN1tmAhFoC-oD5xZNw8ArsYRRrjpsczKg',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' 
  }
});

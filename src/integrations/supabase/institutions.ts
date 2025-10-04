// src/integrations/institutions.ts
import { supabase } from "./client";

export async function addInstitution(data: {
  name: string;
  type: string;
  level: string;
  county: string;
  ownership: string;
}) {
  const { data: institution, error } = await supabase
    .from("institutions")
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return institution;
}
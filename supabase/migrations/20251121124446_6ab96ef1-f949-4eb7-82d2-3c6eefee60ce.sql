-- Create table to store investment simulation submissions
CREATE TABLE public.investment_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  investment_amount NUMERIC NOT NULL,
  investment_years INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.investment_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit investment simulation" 
ON public.investment_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view their own submissions
CREATE POLICY "Users can view their own submissions" 
ON public.investment_submissions 
FOR SELECT 
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_investment_submissions_email ON public.investment_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX idx_investment_submissions_created_at ON public.investment_submissions(created_at DESC);
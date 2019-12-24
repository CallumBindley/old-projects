using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace treehouseCSharpBasics
{
    class FitnessApp
    {
        static void Main(string[] args)
        {
            double runnintTotal = 0;

            while (true)
            {
                // prompt user for minutes excercised
                Console.Write("Enter how many minutes you excercised or type \"quit\" to exit: ");
                string entry = Console.ReadLine();

                if (entry.ToLower() == "quit")
                {
                    break;
                }

                try
                {
                    double minutes = double.Parse(entry);

                    if (minutes <= 0)
                    {
                        Console.WriteLine(minutes + "not and acceptable number");
                        continue;
                    }
                    else if (minutes <= 10)
                    {
                        Console.WriteLine("better than nothing, am I right?");
                    }
                    else if (minutes <= 30)
                    {
                        Console.WriteLine("Way to go hot stuff!");
                    }
                    else if (minutes <= 60)
                    {
                        Console.WriteLine("You must be a ninja warrior in training!");
                    }
                    else
                    {
                        Console.WriteLine("Okay, now you're just showing off!");
                    }

                    //Add minutes excercised to total
                    runnintTotal += minutes;

                }
                catch (FormatException)
                {
                    Console.WriteLine("That is not valid input");
                }

                // Display total minutes excercised to the screen
                Console.WriteLine("You've exercised " + runnintTotal + " minutes");
    
            }

            // Repeat until the user quites
            Console.WriteLine("Goodbye");
        }
    }
}



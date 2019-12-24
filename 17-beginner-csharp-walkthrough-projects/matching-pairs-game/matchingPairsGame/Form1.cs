using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace matchingPairsGame
{
    public partial class Form1 : Form
    {
        Label firstClicked = null;
        Label secondClicked = null;

        Random random = new Random();

        List<string> icons = new List<string>()
        {
            "!","!","N","N",",",",","k","k"
            ,"b","b","v","v","w","w","z","z"
        };

        public Form1()
        {
            InitializeComponent();
            AssignIconsToSquares();
        }

        private void AssignIconsToSquares()
        {
            foreach (Control control in tableLayoutPanel1.Controls)
            {
                Label iconLabel = control as Label; // converts the control variable to a class label named iconLabel

                if (iconLabel != null)
                {
                    int randomNumber = random.Next(icons.Count);  //randomly assigns icons from the list
                    iconLabel.Text = icons[randomNumber];

                    iconLabel.ForeColor = iconLabel.BackColor; // removes the icon by making the icons the same color as the background
                    icons.RemoveAt(randomNumber);
                }
            }
        }

        private void label_click(object sender, EventArgs e)
        {
            if (timer1.Enabled == true) // if timer is already running dont allow anything else.
                return;

            Label clickedLabel = sender as Label; // given the class label a local variable called clickedLabel and identifies it by the label clicked by sender
            if(clickedLabel != null) // if clicked label has been converted from an object to a label control
            {
                if (clickedLabel.ForeColor == Color.Black) //if icon is already black aka clicked , end method
                    return;

                //clickedLabel.ForeColor = Color.Black; // if icon is not black aka not clicked, make black

                if(firstClicked == null) // if the firstClicked variable is null when clicking a label turn its forecolor black and set its value to clickedLabel
                {
                    firstClicked = clickedLabel;
                    firstClicked.ForeColor = Color.Black;

                    return;

                }
                secondClicked = clickedLabel;
                secondClicked.ForeColor = Color.Black;

                if (firstClicked.Text == secondClicked.Text) // if the text from the icons list matches in both labels reset reference variables and dont start timer. 
                {
                    firstClicked = null;
                    secondClicked = null;
                    return;

                }

                CheckForWinner();

                timer1.Start(); //after second label has been clicked the timer1_tick even below starts running

            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            timer1.Stop(); // stops clock before any click starts
            firstClicked.ForeColor = firstClicked.BackColor;
            secondClicked.ForeColor = secondClicked.BackColor;
            firstClicked = null;   // resets the values and colors of the click variables
            secondClicked = null;
        }

        private void CheckForWinner()
        {
            foreach (Control control in tableLayoutPanel1.Controls)
            {
                Label iconLabel = control as Label; 

                if(iconLabel != null)
                {
                    if (iconLabel.ForeColor == iconLabel.BackColor)
                    {
                        return;    // go through each label if ANY forecolor match the backcolor dont do anything. otherwise all have been found and display message
                    }
                }

                MessageBox.Show("You matched all the icons!", "Congratulations and well done! ");
                Close();
            }

        }
    }
}

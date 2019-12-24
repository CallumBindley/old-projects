using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace myFirstWebApp
{
    public partial class ageAndIncome : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            

        }

        protected void ageIncomeButton_Click(object sender, EventArgs e)
        {
            string age = ageInputBox.Text;
            string income = moneyInputBox.Text;

            string result = "$" + income + " is alot for someone aged " + age;

            resultAgeIncomeLabel.Text = result;
        }
    }
}
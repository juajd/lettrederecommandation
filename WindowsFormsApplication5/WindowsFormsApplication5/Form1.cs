using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO.Ports;

namespace WindowsFormsApplication5
{
   
    public partial class Form1 : Form
    {
        Double a, b, c;
        SerialPort myport = new SerialPort();
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            myport.BaudRate = 9600;
            myport.PortName = "COM7";
            myport.Open();
        }
        private void erase()
        {
            System.Drawing.Pen myPen;
            myPen = new System.Drawing.Pen(System.Drawing.Color.Red);
            System.Drawing.Graphics formGraphics = this.CreateGraphics();
            formGraphics.Clear(System.Drawing.Color.LightGray);
            myPen.Dispose();
            formGraphics.Dispose();
        } 
        private void DrawIt()
        {
           
            System.Drawing.Pen myPen;
            myPen = new System.Drawing.Pen(System.Drawing.Color.Red);
            System.Drawing.Graphics formGraphics = this.CreateGraphics();
            formGraphics.DrawLine(myPen, 50, 350, 650, 350);
            formGraphics.DrawLine(myPen, 350, 50, 350, 350);
            formGraphics.DrawArc(myPen, 50, 50, 600, 600, 180, 180);

            myPen.Dispose();
            formGraphics.Dispose();
        }
        private void Draw(int i, int f, int g, int h)
        {
            System.Drawing.Pen myPen;
            myPen = new System.Drawing.Pen(System.Drawing.Color.Red);
            System.Drawing.Graphics formGraphics = this.CreateGraphics();
            formGraphics.DrawLine(myPen, i, f, g, h);
            
            myPen.Dispose();
            formGraphics.Dispose();
        }
        private void Draw2(int a, int b)
        {
            System.Drawing.Pen myPen;
            myPen = new System.Drawing.Pen(System.Drawing.Color.Red);
            System.Drawing.Graphics formGraphics = this.CreateGraphics();
            formGraphics.DrawEllipse(myPen, a - 5, b - 5, 10, 10);
            myPen.Dispose();
            formGraphics.Dispose();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            erase();
            DrawIt();


            myport.Write("5");
            for (int i = 0; i < 180; i++)
            {
                string c = myport.ReadLine();

                decimal d = System.Convert.ToDecimal(c);
                if (d != 0)
                {
                    a = (Math.Cos((i * Math.PI) / 180)) * (Convert.ToInt32(d)*5) + 350;
                    b = (Math.Sin((i * Math.PI) / 180)) * (-Convert.ToInt32(d)*3) + 350;
                    Draw2(Convert.ToInt32(a), Convert.ToInt32(b));
                }
            }

        }
    }
}

This widget implements a newsletter subscription block.

To see example of a Demo Widget with adjustable fields, follow this link:
https://github.com/mertgulmus/demo-widget

Contents:
-	Title for the newsletter (string)
-	Subtitle/slogan (string)
-	Placeholder text for e-mail field (string)
-	Text for button that sends the request (string)
-	Text for sentence on accepting TACs (string)
-	Link for TAC (string)
-	Link for Privacy policy (string)
![Screenshot from 2022-06-28 11-53-02](https://user-images.githubusercontent.com/102791059/179862321-4a9fa669-421a-47a4-aa53-f7041a9c704b.png)


All of the contents are set up in the Magento admin panel and can be changed easily.

Block implements both desktop and mobile styles. Colors and fonts can be easily adjusted via .scss file in the `NewsletterBlockWIdget` component.

Desktop:
![Screenshot from 2022-06-28 15-47-50](https://user-images.githubusercontent.com/102791059/179862406-c95fdabe-d283-48cf-836a-f1ddbb5d26c6.png)

Mobile:

![Screenshot from 2022-06-28 15-48-02](https://user-images.githubusercontent.com/102791059/179862403-b7b3c775-3b98-450e-b488-6069d9c46cfb.png)



NOTE!

This widget should implement BE logic, which can be project-specific and therefore is left for the developer to configure. The missing logic components are following: 
-	E-mail adress validation;
-	Checkbox change that enables/disables the button
-	Request on button click

Installation

To install this widget in your project, you should follow the next steps:
1)	Create `Scandiweb` folder at `*your-project-name*/*cma-folder*/app/code`
2)	Copy `NewsletterBlock` folder from this repo to `Scandiweb`
3)	Go to CMA folder, enter Magento CLI (`npm run cli`) and run `magento setup:upgrade` command. In `*your-project-name*/*cma-folder*/app/etc/config.php` you should see `'Scandiweb_NewsletterBlock' => 1`
4)	Go to `*your-project-name*/*cma-folder*/*theme-folder*/src/component` and copy-paste `NewsletterBlockWidget` folder from this repo.
5)	Rebuild your theme by running `npm run build` in your theme folder
6)	Launch your Magento app, go to admin panel Content -> Pages and edit the page you want to add the widget to.
7)	Go to Content -> Edit with Pagebuilder section by clicking on it. Add a new row from layout, put text element in it and press “Insert widget” icon
8)	Choose “Newsletter Block” from the dropdown list, fill in the contents of the widget with necessary data, and save the page


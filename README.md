# Disciple-Tools-Transfer-Token
Generates a Disciple.Tools transfer token to be used in the Zapier integration

## How to use Zapier with Disciple.Tools

#### Creating a Site Link
1. Create a Disciple Tools demo: [Sign Up](https://disciple.tools/wp-signup.php)
2. Go to the "Manage Site Links" in the Wordpress backend: `https://[Your Domain Here].disciple.tools/wp-admin/edit.php?post_type=site_link_system`
3. Add a new Site Link
4. Leave the "Token" field alone
5. Click on `add this site` next to the "Site 1" input field
6. Enter 'zapier.com' (or any other domain) into the "Site 2" input field
7. Select `Create Contacts` from the "Connection Type" dropdown
8. Leave the "Approved IP Address" blank
9. Select `No, connecting from a non-Disciple.Tools system.` from the "Disciple.Tools" dropdown.
10. Click `Publish` on the right side of the screen.

#### Creating a Zapier 'Zap'
1. Create a Zapier account: [Sign Up](https://zapier.com/sign-up/)
2. Add `Disciple Tools (Site Link)` by visting this [link](https://zapier.com/developer/public-invite/26636/f417912b6cce876e2ac2b600d796f6ce/)
3. Create a new 'Zap' by clicking on `Make a Zap!` in the top right corner: [New Zap](https://zapier.com/app/editor/)
4. Choose an app you want to integrate with like Facebook Ads.
5. Walk through the flow for connecting an account for the app you are using.
6. Once you have that setup, click `Add Step` in the left pane.
7. Select `Action/Search`, search for `Disciple Tools (Site Link)`, and select it.
8. Click `Continue` then click `Connect an Account`
9. In the popup, enter the Token, Site 1, and Site 2 from the "Creating a Site Link" steps
10. Feel free to test it. This will try to create a test contact. Once done, click `Save and Continue`
11. Follow the instructions for populating the Disciple Tool fields based on the integration you selected.



# Developer's Guide
If you wish to expand on this, feel free. This is a basic server that will generate a transfer token. It was 
built for easier integration with Zapier (Session Auth).

### How to Setup Zapier Integration
This is a how to guide to setup the Zapier Integration

### Running the Server
This is a simple Express Node server with one POST route. Setup is easy.
1. Clone repo
2. run `npm update`
3. run `node app.js`
4. Send post to `localhost:3000`

### What the Server expects (JSON)
All information can be found when looking at your Site Link: `https://[Your Domain ex: example.disciple.tools]/wp-admin/edit.php?post_type=site_link_system`
- token : Token from the Site Link
- site1 : Site 1 from the Site Link
- site 2 : Site 2 from the Site Link


# Contact Us
If you have any questions or run into any problems, feel free to create ticket or email me at `spencer` at `pkcsecurity` dot com.

# Google Pay POC

## Setup Process

These sections cover the setup process for the Google Pay integration with Basys IQ Pro Wallet JS. Covering the Google Pay Developer account creation, Business Profile Registration, API setup, BLAH BLAH BLAH

## Google Pay Developer Account Creation



1. Sign in to Google Pay Developer Console
    [Google Pay & Wallet Console](https://pay.google.com/business/console)
    - Sign into the `Google Account` that you'll use for development
    - Once you sign in you will be prompted to enter information about your business if you have not already. Enter the information and hit continue.
    ![Business Set up](/assets/business-setup.png)
    - Once Completed you will be taken to the `Google Pay & Wallet Console` this is where you will set up your `Business Identity`, `Business Information`, `Google Pay API` ADD ONTO this
    - On the Dashboard screen you will also notice at the top right the name of your business followed by a 16 character code. This is your `Merchant ID`, which will be used later in the set up process.
2. Create or Claim a Business Profile
    - If you don’t already have a Payments Business Profile, you’ll be prompted to create one. To start, either select `Get Started` or the `Business Profile` tab
    ![Google Pay and Wallet Console](/assets/Google%20Pay%20&%20Wallet%20Console%20page.png)
    - Once selected you will be prompted with entering a `Business Identity` and `Business Information`. Starting with `Business Identity`, select `Create a new payments profile`.
    ![Business Identity](/assets/Business%20Identity.png)
    - Enter your organizations information and hit `Save`
    ![Business Identity Info](/assets/Business%20Identity%20Info.png)
    - After completing this form you will see `Payments Profile ID` at the top of the form. This will be used later in development.
    - Now move onto `Business Information` and select `Edit Business Information`
    ![Business Information](/assets/Business%20Information.png)
3. Creating the Google Pay API Integration


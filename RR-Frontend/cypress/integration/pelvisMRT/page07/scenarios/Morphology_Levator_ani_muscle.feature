Given	I'm logged-in with valid credentials
When I select 'Female' radio button from Page 01 of Pelvic MRI
And I select any Examination radio button from Page 01 of Pelvic MRI
Then I go to Page 07 of Pelvic MRI
And I click on 'Finding' radio button
And dropdown below 'Finding' is enabled

When I select 'Vulva inflammation' from the dropdown
Then 'Add new finding' button is enabled
And 'Characterization I' tab is preselected

When I select 'Levator ani muscle' tab
Then 'Lesion puborectalis muscle' checkbox is enabled
And 'Lesion iliococcygeus muscle' checkbox is enabled
And 'Lesion pubococygeus muscle' checkbox is enabled

When I select 'Lesion puborectalis muscle' checkbox
Then 'Thinning' radio button is enabled
And 'Tear' radio button is enabled
And 'Avulsion' radio button is enabled

And 'Right' checkbox is enabled
And 'Left' checkbox is enabled
And 'Suspicion of' checkbox is enabled


When I select 'Lesion iliococcygeus muscle' checkbox
Then 'Thinning' radio button is enabled
And 'Tear' radio button is enabled
And 'Avulsion' radio button is enabled

And 'Right' checkbox is enabled
And 'Left' checkbox is enabled
And 'Suspicion of' checkbox is enabled

When I select 'Lesion pubococygeus muscle' checkbox
Then 'Thinning' radio button is enabled
And 'Tear' radio button is enabled
And 'Avulsion' radio button is enabled

And 'Right' checkbox is enabled
And 'Left' checkbox is enabled
And 'Suspicion of' checkbox is enabled

















Given	I'm logged-in with valid credentials
When I select 'Female' radio button from Page 01 of Pelvic MRI
And I select any Examination radio button from Page 01 of Pelvic MRI
Then I go to Page 07 of Pelvic MRI
And I click on 'Finding' radio button
And dropdown below 'Finding' is enabled

When I select 'Vulva inflammation' from the dropdown
Then 'Add new finding' button is enabled
And 'Characterization I' tab is preselected

And 'Vagina: loss of the H-shape or butterfly shape' checkbox is enabled
And 'Posterior dislocation of the vaginal fornix' checkbox is enabled
And 'Saddlebag sign of the urinary bladder' checkbox is enabled

And 'Lesion periurethral ligament' checkbox is enabled
And 'Lesion paraurethral ligament' checkbox is enabled
And 'Lesion pubourethral ligament' checkbox is enabled

And 'Outer sphincter lesion' checkbox is enabled
And 'Inner sphincter lesion' checkbox is enabled

When I select 'Lesion periurethral ligament' checkbox
Then 'Right' checkbox is enabled
And 'Left' checkbox is enabled
And 'Suspicion of' checkbox is enabled

When I select 'Lesion paraurethral ligament' checkbox
Then 'Right' checkbox is enabled
And 'Left' checkbox is enabled
And 'Suspicion of' checkbox is enabled

When I select 'Lesion pubourethral ligament' checkbox
Then 'Right' checkbox is enabled
And 'Left' checkbox is enabled
And 'Suspicion of' checkbox is enabled

When I select 'Outer sphincter lesion' checkbox
Then 'SSL' checkbox is enabled
And 'Strain' radio button is enabled
And 'Rupture' radio button is enabled

When I select 'SSL' checkbox
Then the dropdown is enabled

When I select any option from the dropdown
Then the option is selected

When I select 'Inner sphincter lesion' checkbox
Then 'SSL' checkbox is enabled
And 'Strain' radio button is enabled
And 'Rupture' radio button is enabled

When I select 'SSL' checkbox
Then the dropdown is enabled

When I select any option from the dropdown
Then the option is selected


Test Automation For AutomationPractice test
Framework Design Approach
Behaviour driven developemnt(BDD) approach using Selenuim-cucumber was used to write the automation test scripts.
Page Object Model is the design pattern used to create Object Repository for web UI elements.With the help of PageFactory class, I use annotations @FindBy to find WebElement. We use initElements method to initialize web elements.

For UI Tests : Selenium-cucumber-Maven with PageFactory Design Pattern.

Tools And Environment
IntelliJ IDEA 2016
Java-15.0.1
Maven-3.5.3
Enable cucumber-java plugin in IntelliJ
Required driver versions (Chrome-v87.0.4280.88 & Gecko-v0.26.0)
Required browsers (Chrome-v87.0.4280.88 & Firefox-v77.0.1)
Operating system: Windows(64-bit) and MAC OS


Steps to run the tests
Please make sure to have all the tools and libraries mentioned in the "Tools And Environment" section.

Step-1: Clone the repository from https://github.com/SophiaSathiamoorthy/AutomationPractice into intellij

Step-2: Use the following maven commands to run the tests.

"mvn test" executes RunTest
mvn test -Dcucumber.options="--tags" to run the tests
or
select RunTest from intellij 

Defect: UserStory 3 - As a User when searching for a summer dress
  I want to change the price range to $16 -$20
  I see the search results change

The code for this functionality can be found in Userstory3.feature and UserstorySteps.java

When I select Summer Dresses - 3 products are displayed and price Range is $16.00 - $32.00.
When I move the slider to $20 - price Range changes to $16.00 - $20.00 but the products displayed doesn't change. Keeps saying Loading....

# AutomationPractice

# Creating multiple columns

**The multiple columns cane be used to create navigation links in a header, create multiple sections the body, etc.**

## Using table,float,width ##

A table can be used to have adjacent navigation elements

            
			<table>
                <tr>
                    <td class="forseperator"><a href="/popularrecipes">Popular Recipes</a></td>
                    <td><a href="/whatsnew">Whats new</a></td>
                </tr>
            </table>

Use a CSS property `float: left` and `width: 25%` to create 2 columns.   

		.leftnav {
            background-color: darkgrey;
            float: left;
            width: 25%;
        }

        .centernav {
            background-color: cyan;
            width: 75%;
        }

**The result:**
![](completedwork1.PNG)


## Using CSS: column-count property: ##

Use the `column-count` property to split a big content into multiple columns. See the example in the link below. 
[reference](https://www.w3schools.com/css/css3_multiple_columns.asp)

**Example snippet:**

	        -webkit-column-count: 5; /* Chrome, Safari, Opera */
            -moz-column-count: 5; /* Firefox */
            column-count: 5;

![](splitContentUsingColumnCount.PNG)


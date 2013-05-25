
guidedModel =// @startlock
{
	User :
	{
		password :
		{
			onGet:function()
			{// @endlock
				return "******";
			},// @startlock
			onSet:function(value)
			{// @endlock
				this.HA1key = directory.computeHA1(this.ID, value);
			}// @startlock
		},
		entityMethods :
		{// @endlock
			validatePassword:function()
			{// @lock
				var hash = directory.computeHA1(this.ID, password);
				return (hash === this.HA1Key); //true if validated; false otherwise
			}// @startlock
		}
	}
};// @endlock

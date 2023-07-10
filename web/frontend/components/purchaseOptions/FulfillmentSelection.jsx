import { useCallback } from "react";
import { Card, Stack, RadioButton } from "@shopify/polaris";
import { sellingPlanFulfillmentTrigger } from "../../constants.js";

const FulfillmentSelection = ({ fulfillmentTrigger, onTypeChange }) => {
  const handleSelectionChange = useCallback((_checked, newValue) => {
    onTypeChange(newValue);
  }, []);

  const hasAsapFulfillment =
    fulfillmentTrigger === sellingPlanFulfillmentTrigger.Asap;
  const hasUnknownFulfillment =
    fulfillmentTrigger === sellingPlanFulfillmentTrigger.Unknown;

  return (
    <Card title="Fulfillment" sectioned>
      <Stack vertical spacing="tight">
        <RadioButton
          label="As soon as possible"
          helpText="The order is fulfilled when the order is created."
          id={sellingPlanFulfillmentTrigger.Asap}
          checked={hasAsapFulfillment}
          onChange={handleSelectionChange}
        />
        <RadioButton
          label="Unknown"
          helpText="The fulfillment date is unknown."
          id={sellingPlanFulfillmentTrigger.Unknown}
          checked={hasUnknownFulfillment}
          onChange={handleSelectionChange}
        />
      </Stack>
    </Card>
  );
};

export default FulfillmentSelection;

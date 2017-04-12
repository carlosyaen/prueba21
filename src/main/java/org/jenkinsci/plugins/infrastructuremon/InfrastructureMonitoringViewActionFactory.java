package org.jenkinsci.plugins.infrastructuremon;

import java.util.ArrayList;
import java.util.List;

import hudson.Extension;
import hudson.model.Action;
import hudson.model.TransientViewActionFactory;
import hudson.model.View;

@Extension
public class InfrastructureMonitoringViewActionFactory extends TransientViewActionFactory{

	@Override
	public List<Action> createFor(View view) {
		List<Action> result = new ArrayList<Action>();
		result.add(new InfrastructureMonitoringViewAction());
		return result;
	}

}